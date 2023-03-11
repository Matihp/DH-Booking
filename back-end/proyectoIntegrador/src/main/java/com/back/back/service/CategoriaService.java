package com.back.back.service;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Categoria;
import com.back.back.model.DTO.CategoriaDTO;
import java.util.List;
import java.util.Optional;

public interface CategoriaService {
    Categoria agregarCategoria(CategoriaDTO categoriaDTO) throws BadRequestException;

    Categoria actualizarCategoria(Categoria categoria) throws BadRequestException;
    Optional<Categoria> buscarCategoria(Long id) throws ResourceNotFoundException;
    List<Categoria> listaCategoria() throws ResourceNotFoundException;
    void eliminarCategoria(Long id) throws ResourceNotFoundException;
}
