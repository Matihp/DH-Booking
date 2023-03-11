package com.back.back.controller;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Categoria;
import com.back.back.model.DTO.CategoriaDTO;
import com.back.back.service.impl.CategoriaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin("*")
public class CategoriaController {

    private CategoriaServiceImpl categoriaService;

    @Autowired
    public CategoriaController(CategoriaServiceImpl categoriaService) {
        this.categoriaService = categoriaService;
    }

    @PostMapping
    public ResponseEntity<String> registrarCategoria (@RequestBody CategoriaDTO categoriaDTO) throws BadRequestException {
        Categoria categoria = categoriaService.agregarCategoria(categoriaDTO);
        return new ResponseEntity<>("Categoria guardada con ID: " + categoria.getId() ,null, HttpStatus.CREATED);
    }


    @PutMapping
    public ResponseEntity<String> actualizarCategoria (@RequestBody Categoria categoria) throws BadRequestException, ResourceNotFoundException {

        categoriaService.actualizarCategoria(categoria);
        return new ResponseEntity<>("Categoria actualizada con ID: " + categoria.getId(),null, HttpStatus.ACCEPTED);

    }

    @GetMapping
    public ResponseEntity<List<Categoria>> listarCategorias() throws ResourceNotFoundException {
        List<Categoria> categoriaList = categoriaService.listaCategoria();
        return new ResponseEntity<>(categoriaList,null, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarCategoriaPorId (@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {

        Categoria categoria = categoriaService.buscarCategoria(id).get();
        return new ResponseEntity<>(categoria,null, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) throws ResourceNotFoundException,BadRequestException {

        categoriaService.eliminarCategoria(id);
        return new ResponseEntity<>("Se elimino la categoria con ID: " + id,null, HttpStatus.OK);
    }
}
