package grocery_list_app.services;

import grocery_list_app.model.GroceryList;
import grocery_list_app.model.User;
import grocery_list_app.model.products.Product;
import grocery_list_app.repository.GroceryListRepository;
import grocery_list_app.repository.ProductRepository;
import grocery_list_app.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class GroceryListServices {

    private final GroceryListRepository groceryListRepository;
    private final ProductRepository productRepository;
    private final UserServices userServices;

    public GroceryListServices(GroceryListRepository groceryListRepository, ProductRepository productRepository, UserServices userServices) {
        this.groceryListRepository = groceryListRepository;
        this.productRepository = productRepository;
        this.userServices = userServices;
    }

    public GroceryList createGroceryList(String name, String email) {
        User user = userServices.getUserByEmail(email);
        GroceryList groceryList = new GroceryList();
        groceryList.setName(name);
        groceryList.setUser(user);

        return groceryListRepository.save(groceryList);
    }

    public GroceryList getGroceryListByName(String name) {
        return groceryListRepository.findByNameIgnoreCase(name)
                .orElseThrow(() -> new EntityNotFoundException("GroceryList not found with name: " + name));
    }

    public GroceryList getGroceryListById(Integer id) {
        return groceryListRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("GroceryList not found with id: " + id));

    }


    //adicionar exceção - IllegalStateException
    public void addProductToGroceryList(Integer groceryListId, Integer productId) {
        GroceryList groceryList = groceryListRepository.findById(groceryListId)
                .orElseThrow(() -> new EntityNotFoundException("GroceryList not found with id: " + groceryListId));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + productId));

        groceryList.getProducts().add(product);

        groceryListRepository.save(groceryList);
    }

    public Set<Product> listGroceryListProducts(Integer groceryListId){
        GroceryList groceryList = groceryListRepository.findById(groceryListId)
                .orElseThrow(() -> new EntityNotFoundException("GroceryList not found with id: " + groceryListId));
        return groceryList.getProducts();
    }

    public List<GroceryList> listAllGroceryLists(){
        return groceryListRepository.findAll();
    }

    public List<GroceryList> listAllGroceryListsByUser(String email){
        User user = userServices.getUserByEmail(email);
        return groceryListRepository.findAllByUserId(user.getId());
    }

    public GroceryList getGroceryListByUser(String email, Integer groceryListId){
        User user = userServices.getUserByEmail(email);
        return groceryListRepository.findByIdAndUserId(groceryListId, user.getId())
                .orElseThrow(() -> new EntityNotFoundException("GroceryList not found with id: " + groceryListId + "and User not found with id: " + user.getId()));
    }

}
