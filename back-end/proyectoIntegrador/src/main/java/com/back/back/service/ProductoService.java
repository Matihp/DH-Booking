package com.back.back.service;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.DTO.ProductoDTO;
import com.back.back.model.Producto;
import java.util.List;
import java.util.Optional;

public interface ProductoService {
    Producto agregarProducto(ProductoDTO productoDTO) throws BadRequestException;

    Producto actualizarProducto(ProductoDTO productoDTO) throws BadRequestException;
    Optional<Producto> buscarProducto(Long id) throws ResourceNotFoundException;
    List<Producto> listaProducto() throws ResourceNotFoundException;
    void eliminarProducto(Long id) throws ResourceNotFoundException;
}
