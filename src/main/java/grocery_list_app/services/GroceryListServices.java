package grocery_list_app.services;

import grocery_list_app.model.GroceryList;
import grocery_list_app.model.products.Product;

import java.util.List;

public class GroceryListServices {

    private GroceryList userGroceryList;

   /* public UserGroceryListServices() {
        this.userGroceryList = new UserGroceryList();
    }

    public List<Product> createGroceryList(){
        userGroceryList = new UserGroceryList();

    }


    */

    public List<Product> addToGroceryList(Product product, List<Product> myList) {
        myList.add(product);
        return myList;
    }
}
