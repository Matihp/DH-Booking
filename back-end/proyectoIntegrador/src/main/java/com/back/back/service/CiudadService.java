package com.back.back.service;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Ciudad;
import com.back.back.model.DTO.CiudadDTO;
import java.util.List;
import java.util.Optional;

public interface CiudadService {
    Ciudad agregarCiudad(CiudadDTO ciudadDTO) throws BadRequestException;

    Ciudad actualizarCiudad(Ciudad ciudad) throws BadRequestException;
    Optional<Ciudad> buscarCiudad(Long id) throws ResourceNotFoundException;
    List<Ciudad> listaCiudad() throws ResourceNotFoundException;
    void eliminarCiudad(Long id) throws ResourceNotFoundException;
}
