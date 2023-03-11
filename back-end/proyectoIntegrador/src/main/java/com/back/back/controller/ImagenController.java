package com.back.back.controller;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.DTO.ImagenDTO;
import com.back.back.model.Imagen;
import com.back.back.service.impl.ImagenServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/imagenes")
@CrossOrigin("*")
public class ImagenController {

    private ImagenServiceImpl imagenService;

    @Autowired
    public ImagenController(ImagenServiceImpl imagenService) {
        this.imagenService = imagenService;
    }

    @PostMapping
    public ResponseEntity<String> registrarImagen (@RequestBody ImagenDTO imagenDTO) throws BadRequestException {
        Imagen imagen = imagenService.agregarImagen(imagenDTO);
        return new ResponseEntity<>("Imagen guardada con ID: " + imagen.getId(), null, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<String> actualizarImagen (@RequestBody Imagen imagen) throws BadRequestException {
        imagenService.actualizarImagen(imagen);
        return new ResponseEntity<>("Imagen actualizada con ID: " + imagen.getId(),null, HttpStatus.ACCEPTED);
    }

    @GetMapping
    public ResponseEntity<List<Imagen>> listarImagen() throws ResourceNotFoundException {
        List<Imagen> imagenList = imagenService.listaImagen();
        return new ResponseEntity<>(imagenList,null, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Imagen> buscarImagenPorId (@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {


        Imagen imagen = imagenService.buscarImagen(id).get();
        return new ResponseEntity<>(imagen,null, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarImagen(@PathVariable Long id) throws ResourceNotFoundException,BadRequestException {

        imagenService.eliminarImagen(id);
        return new ResponseEntity<>("Se elimino la imagen con ID: " + id, null, HttpStatus.OK);
    }
}
