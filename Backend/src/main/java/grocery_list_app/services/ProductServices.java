package grocery_list_app.services;

import grocery_list_app.model.products.Product;
import grocery_list_app.model.products.ProductType;
import grocery_list_app.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServices {

    private final ProductRepository productRepository;

    public ProductServices(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByType(ProductType type) {
        return productRepository.findByType(type);
    }

    public Product addProduct(Product product) {
         return productRepository.save(product);
    }
}
