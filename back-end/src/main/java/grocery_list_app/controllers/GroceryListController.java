package grocery_list_app.controllers;

import grocery_list_app.model.GroceryList;
import grocery_list_app.services.GroceryListServices;
import grocery_list_app.services.ProductServices;
import grocery_list_app.services.UserServices;
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/my-lists")
public class GroceryListController {

    private GroceryListServices groceryListServices;
    private ProductServices productServices;
    private UserServices userServices;

    public GroceryListController(GroceryListServices groceryListServices, ProductServices productServices, UserServices userServices) {
        this.groceryListServices = groceryListServices;
        this.productServices = productServices;
        this.userServices = userServices;
    }


    /*
    /grocery-list/my-lists - get (todas as listas) FEITO
    /grocery-list/my-lists - post (adicionar uma lista)
    /grocery-list/my-lists/{listId} - get (lista especifica) FEITO
    /grocery-list/my-lists/{listId} - delete (apagar lista)
    /grocery-list/my-lists/{listId} - put (alterar nome da lista)
     */

    @GetMapping({"", "/"})
    public ResponseEntity<List<GroceryList>> getAllLists(){
        List<GroceryList> lists = groceryListServices.listAllGroceryLists();
            return ResponseEntity.ok(lists);

    }

    @GetMapping("/{groceryListId}")
    public ResponseEntity<GroceryList> getGroceryList(@PathVariable Integer groceryListId){
        GroceryList list = groceryListServices.getGroceryListById(groceryListId);
        return ResponseEntity.ok(list);
    }

    /*@PostMapping({"", "/"})
    public ResponseEntity<GroceryList> createGroceryList(@RequestBody GroceryList groceryList){
        GroceryList create = groceryListServices.createGroceryList(groceryList.getName(),groceryList.getUser().getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(create);
    }

     */



}
