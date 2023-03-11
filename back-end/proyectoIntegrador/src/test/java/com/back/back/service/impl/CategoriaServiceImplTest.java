package com.back.back.service.impl;

import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.Caracteristica;
import com.back.back.model.Categoria;
import com.back.back.model.DTO.CaracteristicaDTO;
import com.back.back.model.DTO.CategoriaDTO;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CategoriaServiceImplTest {

    @Autowired
    CategoriaServiceImpl categoriaService;

    @Test
    @Order((1))
    void agregarCategoria() throws BadRequestException {
        var categoriaToAdd = new CategoriaDTO();
        categoriaToAdd.setId(null);
        categoriaToAdd.setTitulo("Departamentos");
        categoriaToAdd.setDescripcion("Deptos hermosos");
        categoriaToAdd.setUrlImagen("depto.png");
        var categoriaAdded = categoriaService.agregarCategoria(categoriaToAdd);
        Assertions.assertNotNull(categoriaAdded.getId());
    }

    @Test
    @Order((2))
    void actualizarCategoria() throws BadRequestException {
        var categoriaToUpdate = new Categoria();
        categoriaToUpdate.setId(1L);
        categoriaToUpdate.setTitulo("Hoteles");
        categoriaToUpdate.setDescripcion("Hoteles lindos");
        categoriaToUpdate.setUrlImagen("hotel.png");
        var categoriaUpdated = categoriaService.actualizarCategoria(categoriaToUpdate);
        Assertions.assertEquals("Hoteles",categoriaUpdated.getTitulo());
    }

    @Test
    @Order((3))
    void buscarCategoria() throws ResourceNotFoundException {
        var idToFind = 1L;
        var categoriaFound = categoriaService.buscarCategoria(idToFind);
        Assertions.assertEquals(idToFind, categoriaFound.get().getId());
    }

    @Test
    @Order((4))
    void listaCategoria() throws ResourceNotFoundException {
        var listaCategoria = categoriaService.listaCategoria();
        Assertions.assertNotEquals(0,listaCategoria.size());
    }

    @Test
    @Order((5))
    void eliminarCategoria() throws BadRequestException, ResourceNotFoundException {
        var categoriaToDelete = new CategoriaDTO();
        categoriaToDelete.setId(null);
        categoriaToDelete.setTitulo("Hoteles");
        categoriaToDelete.setDescripcion("Hoteles lindos");
        categoriaToDelete.setUrlImagen("hotel.png");
        var categoriaAdded = categoriaService.agregarCategoria(categoriaToDelete);
        var idToDelete = 2L;
        categoriaService.eliminarCategoria(idToDelete);
        Assertions.assertEquals(1,categoriaService.listaCategoria().size());
    }
}