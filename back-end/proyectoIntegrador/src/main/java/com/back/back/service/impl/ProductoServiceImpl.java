package com.back.back.service.impl;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.DTO.ImagenDTO;
import com.back.back.model.DTO.ProductoDTO;
import com.back.back.model.Producto;
import com.back.back.repository.ProductoRepository;
import com.back.back.service.ProductoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductoServiceImpl implements ProductoService {

    private ProductoRepository productoRepository;
    private ImagenServiceImpl imagenService;
    private static final Logger LOGGER = Logger.getLogger(ImagenServiceImpl.class);

    @Autowired
    ObjectMapper mapper;


    public ProductoServiceImpl(ProductoRepository productoRepository, ImagenServiceImpl imagenService) {
        this.productoRepository = productoRepository;
        this.imagenService = imagenService;
    }

    @Override
    public Producto agregarProducto(ProductoDTO productoDTO) throws BadRequestException {
        if ((productoDTO) == null){
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
        List<ImagenDTO> imagenList = productoDTO.getListImagen();
        productoDTO.setListImagen(new ArrayList<>());
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        Producto productoSaved = productoRepository.save(producto);
        productoSaved.setListImagen(imagenList.stream().map(imagen -> {
            imagen.setProducto(productoSaved);
            try {
                return imagenService.agregarImagen(imagen);
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }).collect(Collectors.toList()));
        return productoSaved;

    }

    @Override
    public Producto actualizarProducto(ProductoDTO productoDTO) throws BadRequestException{
        LOGGER.info("Se inicio una operacion de actualizado de producto con titulo = " + productoDTO.getTitulo());
        return agregarProducto(productoDTO);
    }

    @Override
    public Optional<Producto> buscarProducto(Long id) throws ResourceNotFoundException {
        LOGGER.info("Se inicio una operacion de buscar producto con ID= " + id);
        Optional<Producto> productoBuscado = productoRepository.findById(id);
        if (productoBuscado.isPresent()){
            return productoBuscado;
        }else{
            throw new ResourceNotFoundException("No se pudo encontrar el producto con ID: " + id);
        }
    }
    @Override
    public List<Producto> listaProducto() throws ResourceNotFoundException {

        LOGGER.info("Se inicio una operacion de listado de productos ");
        List<Producto> productoList = productoRepository.findAll();
        if (productoList.isEmpty()){
            throw new ResourceNotFoundException("La lista de productos se encuentra vacia");
        }else{
            return productoList;
        }
    }

    @Override
    public void eliminarProducto(Long id) throws ResourceNotFoundException{
        Optional<Producto> productoAEliminar = buscarProducto(id);
        if (productoAEliminar.isPresent()){
            productoRepository.deleteById(id);
        }
        else {

            throw new ResourceNotFoundException("La producto a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }
    }

    public Optional<List<Producto>> findAllByCiudadId(Long id){
        return productoRepository.findAllByCiudadId(id);
    }

    public Optional<List<Producto>> findAllByCategoriaId(Long id){
        return productoRepository.findAllByCategoriaId(id);
    }

    public List<Producto> getRandomProducts(){
        List<Producto> lista = productoRepository.findAll().stream().limit(8).collect(Collectors.toList());
        Collections.shuffle(lista);
        return lista;
    }

}
