package com.back.back.repository;
import com.back.back.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,Long> {
    Optional<List<Producto>> findAllByCiudadId(Long id);
    Optional<List<Producto>> findAllByCategoriaId(Long id);

//    @Query(value = "SELECT * FROM productos ORDER BY RAND() LIMIT 8", nativeQuery = true)
//    List<Producto> getRandomProducts();
}
