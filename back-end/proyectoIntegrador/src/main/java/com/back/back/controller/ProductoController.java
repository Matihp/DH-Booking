package com.back.back.controller;
import com.back.back.exception.BadRequestException;
import com.back.back.exception.ResourceNotFoundException;
import com.back.back.model.DTO.ProductoDTO;
import com.back.back.model.Producto;
import com.back.back.service.impl.ProductoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin("*")
public class ProductoController {

    private ProductoServiceImpl productoService;

    @Autowired
    public ProductoController(ProductoServiceImpl productoService) {
        this.productoService = productoService;
    }

    @PostMapping
    public ResponseEntity<String> registrarProducto (@RequestBody ProductoDTO productoDTO) throws BadRequestException {
        Producto producto = productoService.agregarProducto(productoDTO);
        return new ResponseEntity<>("Producto guardado con ID: " + producto.getId(), null, HttpStatus.CREATED);
    }


    @PutMapping
    public ResponseEntity<String> actualizarProducto (@RequestBody ProductoDTO productoDTO) throws BadRequestException, ResourceNotFoundException {
        productoService.actualizarProducto(productoDTO);
        return new ResponseEntity<>("Producto actualizado con titulo: " + productoDTO.getTitulo(),null, HttpStatus.ACCEPTED);
    }

    @GetMapping
    public ResponseEntity<List<Producto>> listarProductos() throws ResourceNotFoundException {
        List<Producto> productoList = productoService.listaProducto();
        return new ResponseEntity<>(productoList,null, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscarProductoPorId (@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        Producto producto = productoService.buscarProducto(id).get();
        return new ResponseEntity<>(producto,null, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable Long id) throws ResourceNotFoundException,BadRequestException {
        productoService.eliminarProducto(id);
        return new ResponseEntity<>("Se elimino el producto con ID: " + id, null, HttpStatus.OK);
    }

    @GetMapping("/ciudad/{id}")
    public ResponseEntity<List<Producto>> findAllByCiudadId(@PathVariable Long id){
        return ResponseEntity.ok(productoService.findAllByCiudadId(id).get());
    }

    @GetMapping("/categoria/{id}")
    public ResponseEntity<List<Producto>> findAllByCategoriaId(@PathVariable Long id){
        return ResponseEntity.ok(productoService.findAllByCategoriaId(id).get());
    }

    @GetMapping("/random")
    public ResponseEntity<List<Producto>> getRandomProducts(){
        return ResponseEntity.ok(productoService.getRandomProducts());
    }

}