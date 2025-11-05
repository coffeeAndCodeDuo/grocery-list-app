package grocery_list_app.controllers;

import grocery_list_app.model.products.Product;
import grocery_list_app.model.products.ProductType;
import grocery_list_app.services.ProductServices;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductServices productServices;

    public ProductController(ProductServices productServices) {
        this.productServices = productServices;
    }

    @GetMapping({"", "/"})
    public ResponseEntity<List<Product>> listAllProducts(Authentication authentication) {
        String email = authentication.getName();
        List<Product> productsList = productServices.getAllProducts(email);
        return ResponseEntity.ok(productsList);
    }

    @GetMapping("/{productType}")
    public ResponseEntity<List<Product>> listProductsByType(@PathVariable ProductType productType, Authentication authentication) {
        String email = authentication.getName();
        List<Product> productListByType = productServices.getProductsByType(productType, email);
        return ResponseEntity.ok(productListByType);
    }

    @GetMapping("/types")
    public ResponseEntity<List<Map<String,String>>> listTypes (Authentication authentication){
        String email = authentication.getName();
        List<Map<String, String>> productTypes = productServices.getProductTypes(email);
        return ResponseEntity.ok(productTypes);
    }

}
