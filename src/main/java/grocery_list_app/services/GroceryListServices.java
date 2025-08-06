package grocery_list_app.services;

import grocery_list_app.model.GroceryList;
import grocery_list_app.model.User;
import grocery_list_app.model.products.Product;
import grocery_list_app.repository.GroceryListRepository;
import grocery_list_app.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroceryListServices {

    private final GroceryListRepository groceryListRepository;
    private final UserRepository userRepository;

    public GroceryListServices(GroceryListRepository groceryListRepository, UserRepository userRepository) {
        this.groceryListRepository = groceryListRepository;
        this.userRepository = userRepository;
    }

    public GroceryList createGroceryList(String name, Integer userId) {
        User user = userRepository.findById(userId);
        GroceryList groceryList = new GroceryList();
        groceryList.setName(name);
        groceryList.setUser(user);

        return groceryListRepository.save(groceryList);
    }


    public List<Product> addToGroceryList(Product product, List<Product> myList) {
        myList.add(product);
        return myList;
    }
}
