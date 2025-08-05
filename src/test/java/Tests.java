import grocery_list_app.Main;
import grocery_list_app.model.products.Product;
import grocery_list_app.services.ProductServices;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest(classes = grocery_list_app.Main.class)
public class Tests {

    @Autowired
    private ProductServices productServices;

    @Test
    public void testAllProducts(){
        List<Product> products = productServices.getAllProducts();
        products.forEach(product -> System.out.println(product.getName()));
    }
}
