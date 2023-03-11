package com.back.back.service;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Caracteristica;
import com.back.back.model.DTO.CaracteristicaDTO;
import java.util.List;
import java.util.Optional;

public interface CaracteristicaService {

    Caracteristica agregarCaracteristica(CaracteristicaDTO caracteristicaDTO) throws BadRequestException;
    Caracteristica actualizarCaracteristica(Caracteristica caracteristica) throws BadRequestException;
    Optional<Caracteristica> buscarCaracteristica(Long id) throws ResourceNotFoundException;
    List<Caracteristica> listaCaracteristica() throws ResourceNotFoundException;
    void eliminarCaracteristica(Long id) throws ResourceNotFoundException;

}
