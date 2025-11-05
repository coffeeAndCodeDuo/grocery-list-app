package grocery_list_app.services;

import grocery_list_app.exceptions.ProductAlreadyInListException;
import grocery_list_app.model.GroceryList;
import grocery_list_app.model.User;
import grocery_list_app.model.products.Product;
import grocery_list_app.repository.GroceryListRepository;
import grocery_list_app.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public GroceryList addProductToGroceryList(Integer groceryListId, String email, Integer productId) {
       GroceryList groceryList = getGroceryListByUser(email, groceryListId);

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + productId));

        if(groceryList.getProducts().contains(product)){
            throw new ProductAlreadyInListException(product.getName() + " already added to the list");

        } else {
            groceryList.getProducts().add(product);
            groceryListRepository.save(groceryList);
        }

        return groceryList;
    }

    public GroceryList removeProductFromList(Integer groceryListId, String email, Integer productId){
        GroceryList groceryList = getGroceryListByUser(email, groceryListId);

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + productId));

        if(groceryList.getProducts().contains(product)){
            groceryList.getProducts().remove(product);
            groceryListRepository.save(groceryList);
        } else {
            throw  new EntityNotFoundException("Product is not in the list");
        }

        return groceryList;
    }

    public List<Product> listGroceryListProducts(Integer groceryListId){
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

    public void deleteGroceryList(Integer groceryListId, String email) {
        GroceryList groceryList = getGroceryListByUser(email, groceryListId);
        groceryListRepository.delete(groceryList);
    }

    public GroceryList changeGroceryListName(Integer groceryListId, String newName, String email) {
        GroceryList groceryList = getGroceryListByUser(email, groceryListId);
        groceryList.setName(newName);

        return groceryListRepository.save(groceryList);
    }
}
