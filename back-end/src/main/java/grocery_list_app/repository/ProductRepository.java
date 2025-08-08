package grocery_list_app.repository;

import grocery_list_app.model.products.Product;
import grocery_list_app.model.products.ProductType;
import org.springframework.data.domain.Limit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByType(ProductType type);

    Product findById(Integer id);
}
