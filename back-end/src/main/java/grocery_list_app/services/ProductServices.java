package grocery_list_app.services;

import grocery_list_app.model.products.Product;
import grocery_list_app.model.products.ProductType;
import grocery_list_app.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServices {

    private final ProductRepository productRepository;
    private final UserServices userServices;

    public ProductServices(ProductRepository productRepository, UserServices userServices) {
        this.productRepository = productRepository;
        this.userServices = userServices;
    }

    public List<Product> getAllProducts(String email) {
        userServices.getUserByEmail(email);
        return productRepository.findAll();
    }

    public List<Product> getProductsByType(ProductType type, String email) {
        userServices.getUserByEmail(email);
        return productRepository.findByType(type);
    }

    public Product addProduct(Product product) {
         return productRepository.save(product);
    }
}
