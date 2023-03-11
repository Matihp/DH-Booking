package com.back.back.model.DTO;
import lombok.Data;
import java.util.List;
@Data
public class ProductoDTO{

    private Long id;
    private String titulo;
    private CategoriaDTO categoria;
    private CiudadDTO ciudad;
    private List<CaracteristicaDTO> caracteristicas;
    private List<ImagenDTO> listImagen;
    private String review;
    private Integer puntuacion;
    private Integer estrellas;
    private String tituloDescripcion;
    private String descripcion;
    private String politicaLugar;
    private String politicaSaludSeguridad;
    private String politicaCancelacion;

}
