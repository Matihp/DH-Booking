package com.back.back.model.DTO;
import com.back.back.model.Producto;
import lombok.Data;
@Data
public class ImagenDTO {

    private Long id;
    private String titulo;
    private String url;
    private Producto producto;
}
