package com.back.back.service.impl;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Ciudad;
import com.back.back.model.DTO.CiudadDTO;
import com.back.back.repository.CiudadRepository;
import com.back.back.service.CiudadService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class CiudadServiceImpl implements CiudadService {
    private CiudadRepository ciudadRepository;

    @Autowired
    ObjectMapper mapper;

    private static final Logger LOGGER = Logger.getLogger(CiudadServiceImpl.class);

    public CiudadServiceImpl(CiudadRepository ciudadRepository) {
        this.ciudadRepository = ciudadRepository;
    }

    @Override
    public Ciudad agregarCiudad(CiudadDTO ciudadDTO) throws BadRequestException {
        LOGGER.info("Se inicio una operacion de guardado de la ciudad con titulo " + ciudadDTO.getNombre_ciudad());
        Ciudad ciudad = mapper.convertValue(ciudadDTO, Ciudad.class );
        if (ciudad == null){
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
        return ciudadRepository.save(ciudad);
    }
    @Override

    public Ciudad actualizarCiudad(Ciudad ciudad) throws BadRequestException{
        LOGGER.info("Se inicio una operacion de actualizado de ciudad con ID= " + ciudad.getId());
        Optional<Ciudad> ciudadBuscada = ciudadRepository.findById(ciudad.getId());
        if (ciudadBuscada.isPresent()){
            return ciudadRepository.save(ciudad);
        } else {
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
    }
    @Override

    public Optional<Ciudad> buscarCiudad(Long id) throws ResourceNotFoundException {
        LOGGER.info("Se inicio una operacion de busqueda de ciudad con ID " + id);
        Optional<Ciudad> ciudadBuscada = ciudadRepository.findById(id);
        if (ciudadBuscada.isPresent()){
            return ciudadBuscada;
        }else{
            throw new ResourceNotFoundException("No se pudo encontrar la ciudad con ID: " + id);
        }
    }
    @Override
    public List<Ciudad> listaCiudad() throws ResourceNotFoundException {
        LOGGER.info("Se inicio una operacion de listado de ciudades ");
        List<Ciudad> ciudadList = ciudadRepository.findAll();
        if (ciudadList.isEmpty()){
            throw new ResourceNotFoundException("La lista de ciudades se encuentra vacia");
        }else{
            return ciudadList;
        }
    }
    @Override
    public void eliminarCiudad(Long id) throws ResourceNotFoundException{
        Optional<Ciudad> ciudadAEliminar = buscarCiudad(id);
        if (ciudadAEliminar.isPresent()){
            ciudadRepository.deleteById(id);
            LOGGER.warn("Se realizo una operacion de eliminado de ciudad con id " + id);
        }
        else {

            throw new ResourceNotFoundException("La ciudad a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }
}
