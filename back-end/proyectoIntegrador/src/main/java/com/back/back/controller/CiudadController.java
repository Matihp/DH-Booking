package com.back.back.controller;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Ciudad;
import com.back.back.model.DTO.CiudadDTO;
import com.back.back.service.impl.CiudadServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/ciudades")
@CrossOrigin("*")
public class CiudadController {

    private CiudadServiceImpl ciudadService;

    @Autowired
    public CiudadController(CiudadServiceImpl ciudadService) {
        this.ciudadService = ciudadService;
    }

    @PostMapping
    public ResponseEntity<String> registrarCiudad (@RequestBody CiudadDTO ciudadDTO) throws BadRequestException {
        Ciudad ciudad = ciudadService.agregarCiudad(ciudadDTO);
        return new ResponseEntity<>("Ciudad guardada con ID: " + ciudad.getId() ,null, HttpStatus.CREATED);
    }


    @PutMapping
    public ResponseEntity<String> actualizarCiudad (@RequestBody Ciudad ciudad) throws BadRequestException {
        ciudadService.actualizarCiudad(ciudad);
        return new ResponseEntity<>("Ciudad actualizada con ID: " + ciudad.getId(),null, HttpStatus.ACCEPTED);
    }

    @GetMapping
    public ResponseEntity<List<Ciudad>> listarCiudad() throws ResourceNotFoundException {
        List<Ciudad> ciudadList = ciudadService.listaCiudad();
        return new ResponseEntity<>(ciudadList,null, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> buscarCiudadPorId (@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {

        Ciudad ciudad = ciudadService.buscarCiudad(id).get();
        return new ResponseEntity<>(ciudad,null, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCiudad(@PathVariable Long id) throws ResourceNotFoundException,BadRequestException {

        ciudadService.eliminarCiudad(id);
        return new ResponseEntity<>("Se elimino la ciudad con ID: " + id, null, HttpStatus.OK);
    }
}
