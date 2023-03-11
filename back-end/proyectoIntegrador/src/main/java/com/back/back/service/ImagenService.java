package com.back.back.service;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.DTO.ImagenDTO;
import com.back.back.model.Imagen;
import java.util.List;
import java.util.Optional;

public interface ImagenService {
    Imagen agregarImagen(ImagenDTO imagenDTO) throws BadRequestException;

    Imagen actualizarImagen(Imagen imagen) throws BadRequestException;
    Optional<Imagen> buscarImagen(Long id) throws ResourceNotFoundException;
    List<Imagen> listaImagen() throws ResourceNotFoundException;
    void eliminarImagen(Long id) throws ResourceNotFoundException;
}
