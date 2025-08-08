import grocery_list_app.model.GroceryList;
import grocery_list_app.model.User;
import grocery_list_app.model.products.Product;
import grocery_list_app.model.products.ProductType;
import grocery_list_app.services.GroceryListServices;
import grocery_list_app.services.ProductServices;
import grocery_list_app.services.UserServices;
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

    @Autowired
    private UserServices userServices;

    //Product Tests
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

    //GroceryList Tests
    @Test
    public void createGroceryList(){
        GroceryList groceryList = groceryListServices.createGroceryList("list1", 1);
        GroceryList groceryList2 = groceryListServices.createGroceryList("list2", 1);
    }

    @Test
    public void testFindGroceryListById(){
        groceryListServices.getGroceryListById(1);
        System.out.println(groceryListServices.getGroceryListById(1).getName());
    }

    @Test
    public void testFindGroceryListByName(){
        System.out.println(groceryListServices.getGroceryListByName("list2").getUser().getFirstName());

    }

    @Test
    public void testAddProductToGroceryList(){
       groceryListServices.addProductToGroceryList(1,20);
       groceryListServices.addProductToGroceryList(1, 3);
    }

    @Test
    public void testListGroceryListProducts(){
        System.out.println(groceryListServices.listGroceryListProducts(1).toString());
    }

    @Test
    public void listAllGroceryLists(){
        System.out.println(groceryListServices.listAllGroceryLists().toString());
    }

    //User Tests
    @Test
    public void testFindUserById(){
       User user= userServices.getUserById(1);
       System.out.println(user.getFirstName());
    }

    @Test
    public void testFindUserByEMail(){
        User user = userServices.getUserByEmail("mariana@email.com");
        System.out.println(user.getFirstName());
    }

}
