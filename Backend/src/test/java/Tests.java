import grocery_list_app.Main;
import grocery_list_app.model.GroceryList;
import grocery_list_app.model.User;
import grocery_list_app.model.products.Product;
import grocery_list_app.model.products.ProductType;
import grocery_list_app.repository.GroceryListRepository;
import grocery_list_app.services.GroceryListServices;
import grocery_list_app.services.ProductServices;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest(classes = grocery_list_app.Main.class)
public class Tests {

    @Autowired
    private ProductServices productServices;
    @Autowired
    private GroceryListServices groceryListServices;

    @Test
    public void testAllProducts(){
        List<Product> products = productServices.getAllProducts();
        products.forEach(product -> System.out.println(product.getName()));
    }

    @Test
    public void testProductByType(){
        List<Product> products = productServices.getProductsByType(ProductType.FRUITS);
        products.forEach(product -> System.out.println(product.getName()));
    }

    @Test
    public void testAddProduct(){
        Product product = new Product();
        product.setName("BANANA");
        product.setType(ProductType.FRUITS);
        productServices.addProduct(product);

    }

    @Test
    public void createGroceryList(){
        GroceryList groceryList = groceryListServices.createGroceryList("list1", 1);
        GroceryList groceryList2 = groceryListServices.createGroceryList("list2", 1);

    }

}
