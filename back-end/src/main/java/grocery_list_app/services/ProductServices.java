package grocery_list_app.services;

import grocery_list_app.model.products.Product;
import grocery_list_app.model.products.ProductType;
import grocery_list_app.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

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

    public List<Map<String, String>> getProductTypes (String email){
        userServices.getUserByEmail(email);

        return Arrays.stream(ProductType.values())
                .map(pt -> Map.of(
                        "id", pt.getId(),
                        "displayName", pt.getDisplayName()
                ))
                .toList();
    }

    public Product addProduct(Product product) {
         return productRepository.save(product);
    }
}
