package com.back.back.service.impl;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Caracteristica;
import com.back.back.model.DTO.CaracteristicaDTO;
import com.back.back.repository.CaracteristicaRepository;
import com.back.back.service.CaracteristicaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class CaracteristicaServiceImpl implements CaracteristicaService{

    private CaracteristicaRepository caracteristicaRepository;

    @Autowired
    ObjectMapper mapper;

    private static final Logger LOGGER = Logger.getLogger(CaracteristicaServiceImpl.class);

    public CaracteristicaServiceImpl(CaracteristicaRepository caracteristicaRepository) {
        this.caracteristicaRepository = caracteristicaRepository;
    }


    @Override
    public Caracteristica agregarCaracteristica(CaracteristicaDTO caracteristicaDTO) throws BadRequestException{
        Caracteristica caracteristica = mapper.convertValue(caracteristicaDTO, Caracteristica.class);
        LOGGER.info("Se inicio una operacion de guardado de la caracteristica con nombre " + caracteristicaDTO.getNombre());
        if (caracteristica == null){
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
        return caracteristicaRepository.save(caracteristica);
    }

    @Override
    public Caracteristica actualizarCaracteristica(Caracteristica caracteristica) throws BadRequestException {
        LOGGER.info("Se inicio una operacion de actualizado de caracteristica con ID= " + caracteristica.getId());
        Optional<Caracteristica> caracteristicaBuscada = caracteristicaRepository.findById(caracteristica.getId());
        if (caracteristicaBuscada.isPresent()){
            return caracteristicaRepository.save(caracteristica);
        } else {
            throw new BadRequestException("Revise la informacion enviada por favor");
        }
    }

    @Override
    public Optional<Caracteristica> buscarCaracteristica(Long id) throws ResourceNotFoundException{
        LOGGER.info("Se inicio una operacion de busqueda de caracteristica con ID " + id);
        Optional<Caracteristica> caracteristicaBuscada = caracteristicaRepository.findById(id);
        if (caracteristicaBuscada.isPresent()){
            return caracteristicaBuscada;
        }else{
            throw new ResourceNotFoundException("No se pudo encontrar la caracteristica con ID: " + id);
        }
    }

    @Override
    public List<Caracteristica> listaCaracteristica() throws ResourceNotFoundException{
        LOGGER.info("Se inicio una operacion de listado de caracteristicas ");
        List<Caracteristica> caracteristicaList = caracteristicaRepository.findAll();
        if (caracteristicaList.isEmpty()){
            throw new ResourceNotFoundException("La lista de caracteristicas se encuentra vacia");
        }else{
            return caracteristicaList;
        }
    }

    @Override
    public void eliminarCaracteristica(Long id) throws ResourceNotFoundException{
        Optional<Caracteristica> caracteristicaAEliminar = buscarCaracteristica(id);
        if (caracteristicaAEliminar.isPresent()){
            caracteristicaRepository.deleteById(id);
            LOGGER.warn("Se realizo una operacion de eliminado de caracteristica con id " + id);
        }
        else {
            throw new ResourceNotFoundException("No se pudo eliminar la caracteristica con ID: " + id);
        }
    }
}
