package com.back.back.service.impl;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.DTO.ImagenDTO;
import com.back.back.model.Imagen;
import com.back.back.repository.ImagenRepository;
import com.back.back.service.ImagenService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ImagenServiceImpl implements ImagenService {

    @Autowired
    ObjectMapper mapper;
    private
    ImagenRepository imagenRepository;

    private static final Logger LOGGER = Logger.getLogger(ImagenServiceImpl.class);

    public ImagenServiceImpl(ImagenRepository imagenRepository) {
        this.imagenRepository = imagenRepository;
    }

    @Override
    public Imagen agregarImagen(ImagenDTO imagenDTO) throws BadRequestException {
        LOGGER.info("Se inicio una operacion de guardado de la imagen con titulo " + imagenDTO.getTitulo());
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class );
        if (imagen == null){
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
        return imagenRepository.save(imagen);
    }

    @Override
    public Imagen actualizarImagen(Imagen imagen) throws BadRequestException{
        LOGGER.info("Se inicio una operacion de actualizado de imagen con ID= " + imagen.getId());
        Optional<Imagen> imagenBuscada = imagenRepository.findById(imagen.getId());
        if (imagenBuscada.isPresent()){
            return imagenRepository.save(imagen);
        } else {
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
    }
    @Override
    public Optional<Imagen> buscarImagen(Long id) throws  ResourceNotFoundException {
        LOGGER.info("Se inicio una operacion de buscar de imagen con ID= " + id);
        Optional<Imagen> imagenBuscada = imagenRepository.findById(id);
        if (imagenBuscada.isPresent()){
            return imagenBuscada;
        }else{
            throw new ResourceNotFoundException("No se pudo encontrar la imagen con ID: " + id);
        }
    }

    @Override
    public List<Imagen> listaImagen() throws ResourceNotFoundException {
        LOGGER.info("Se inicio una operacion de listado de imagenes ");
        List<Imagen> imagenList = imagenRepository.findAll();
        if (imagenList.isEmpty()){
            throw new ResourceNotFoundException("La lista de imagenes se encuentra vacia");
        }else{
            return imagenList;
        }
    }

    @Override
    public void eliminarImagen(Long id) throws ResourceNotFoundException {
        Optional<Imagen> imagenAEliminar = buscarImagen(id);
        if (imagenAEliminar.isPresent()){
            imagenRepository.deleteById(id);
            LOGGER.warn("Se realizo una operacion de eliminado de imagen con id " + id);
        }
        else {

            throw new ResourceNotFoundException("La imagen a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }
}
