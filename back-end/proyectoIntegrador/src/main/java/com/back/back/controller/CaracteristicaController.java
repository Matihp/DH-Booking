package com.back.back.controller;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Caracteristica;
import com.back.back.model.DTO.CaracteristicaDTO;
import com.back.back.service.impl.CaracteristicaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/caracteristicas")
@CrossOrigin("*")
public class CaracteristicaController {

    private CaracteristicaServiceImpl caracteristicaService;

    @Autowired
    public CaracteristicaController(CaracteristicaServiceImpl caracteristicaService) {
        this.caracteristicaService = caracteristicaService;
    }

    @PostMapping
    public ResponseEntity<String> agregarCaracteristica (@RequestBody CaracteristicaDTO caracteristicaDTO) throws BadRequestException {
        Caracteristica caracteristica = caracteristicaService.agregarCaracteristica(caracteristicaDTO);
        return new ResponseEntity<>("Caracteristica guardada con ID: " + caracteristica.getId() ,null, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<String> actualizarCaracteristica (@RequestBody Caracteristica caracteristica) throws BadRequestException {
        caracteristicaService.actualizarCaracteristica(caracteristica);
        return new ResponseEntity<>("Caracteristica actualizada con ID: " + caracteristica.getId(),null, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Caracteristica> buscarCaracteristicaPorId (@PathVariable Long id) throws ResourceNotFoundException {
        Caracteristica caracteristica = caracteristicaService.buscarCaracteristica(id).get();
        return new ResponseEntity<>(caracteristica,null, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Caracteristica>> listarCaracteristica()throws ResourceNotFoundException{
        List<Caracteristica> caracteristicaList = caracteristicaService.listaCaracteristica();
        return new ResponseEntity<>(caracteristicaList,null, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCaracteristica(@PathVariable Long id) throws ResourceNotFoundException {
        caracteristicaService.eliminarCaracteristica(id);
        return new ResponseEntity<>("Se elimino la caracteristica con ID: " + id,null, HttpStatus.OK);
    }
}
