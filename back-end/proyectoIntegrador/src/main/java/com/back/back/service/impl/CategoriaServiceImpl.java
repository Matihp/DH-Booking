package com.back.back.service.impl;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Categoria;
import com.back.back.model.DTO.CategoriaDTO;
import com.back.back.repository.CategoriaRepository;
import com.back.back.service.CategoriaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    private CategoriaRepository categoriaRepository;

    @Autowired
    ObjectMapper mapper;

    private static final Logger LOGGER = Logger.getLogger(CategoriaServiceImpl.class);

    public CategoriaServiceImpl(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }



    @Override
    public Categoria agregarCategoria(CategoriaDTO categoriaDTO) throws BadRequestException {
        LOGGER.info("Se inicio una operacion de guardado de la categoria con titulo " + categoriaDTO.getTitulo());
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class );
        if (categoria == null){
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
        return categoriaRepository.save(categoria);
    }


    @Override
    public Categoria actualizarCategoria(Categoria categoria) throws BadRequestException{
        LOGGER.info("Se inicio una operacion de actualizado de categoria con ID= " + categoria.getId());
        Optional<Categoria> categoriaBuscada = categoriaRepository.findById(categoria.getId());
        if (categoriaBuscada.isPresent()){
            return categoriaRepository.save(categoria);
        } else {
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
    }

    @Override
    public Optional<Categoria> buscarCategoria(Long id) throws  ResourceNotFoundException {
        LOGGER.info("Se inicio una operacion de busqueda de categoria con ID " + id);
        Optional<Categoria> categoriaBuscada = categoriaRepository.findById(id);
        if (categoriaBuscada.isPresent()){
            return categoriaBuscada;
        }else{
            throw new ResourceNotFoundException("No se pudo encontrar la categoria con ID: " + id);
        }
    }


    @Override
    public List<Categoria> listaCategoria() throws ResourceNotFoundException {
        LOGGER.info("Se inicio una operacion de listado de categorias ");
        List<Categoria> categoriaList = categoriaRepository.findAll();
        if (categoriaList.isEmpty()){
            throw new ResourceNotFoundException("La lista de caracteristicas se encuentra vacia");
        }else{
            return categoriaList;
        }
    }

    @Override
    public void eliminarCategoria(Long id) throws ResourceNotFoundException {
        Optional<Categoria> categoriaAEliminar = buscarCategoria(id);
        if (categoriaAEliminar.isPresent()){
            categoriaRepository.deleteById(id);
            LOGGER.warn("Se realizo una operacion de eliminado de categoria con id " + id);
        }
        else {

            throw new ResourceNotFoundException("La categoria a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }
    }


}
