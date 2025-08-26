package grocery_list_app.controllers;

import grocery_list_app.exceptions.ProductAlreadyInListException;
import grocery_list_app.model.GroceryList;
import grocery_list_app.services.GroceryListServices;
import grocery_list_app.services.ProductServices;
import grocery_list_app.services.UserServices;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/my-lists")
public class GroceryListController {

    private final GroceryListServices groceryListServices;

    public GroceryListController(GroceryListServices groceryListServices) {
        this.groceryListServices = groceryListServices;
    }

    @GetMapping({"", "/"})
    public ResponseEntity<List<GroceryList>> getAllLists(Authentication authentication){
        String email = authentication.getName();
        List<GroceryList> lists = groceryListServices.listAllGroceryListsByUser(email);
            return ResponseEntity.ok(lists);
    }

    @GetMapping("/{groceryListId}")
    public ResponseEntity<GroceryList> getGroceryList(@PathVariable Integer groceryListId, Authentication authentication){
        String email = authentication.getName();
        GroceryList list = groceryListServices.getGroceryListByUser(email, groceryListId);
        return ResponseEntity.ok(list);
    }

    @PostMapping({"", "/"})
    public ResponseEntity<GroceryList> createGroceryList(@RequestBody GroceryList groceryList, Authentication authentication){
       String email = authentication.getName();
       GroceryList newGroceryList = groceryListServices.createGroceryList(groceryList.getName(), email);
       return ResponseEntity.ok(newGroceryList);
    }

    @DeleteMapping("/{groceryListId}")
    public ResponseEntity<?> deleteGroceryList(@PathVariable Integer groceryListId, Authentication authentication){
        String email = authentication.getName();
        groceryListServices.deleteGroceryList(groceryListId, email);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{groceryListId}")
    public ResponseEntity<GroceryList> changeGroceryListName(@PathVariable Integer groceryListId, @RequestBody GroceryList groceryList, Authentication authentication){
        String email = authentication.getName();
        GroceryList updateGroceryList = groceryListServices.changeGroceryListName(groceryListId, groceryList.getName(), email);
        return ResponseEntity.ok(updateGroceryList);
    }

    @PostMapping("/{groceryListId}/{productId}")
    public ResponseEntity<?> addProducts(@PathVariable Integer groceryListId, @PathVariable Integer productId, Authentication authentication){
        String email = authentication.getName();
        try{
            GroceryList groceryList = groceryListServices.addProductToGroceryList(groceryListId, email, productId);
            return ResponseEntity.ok(groceryList);
        } catch (ProductAlreadyInListException ex){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Product already added to the list");
        }
    }

    @DeleteMapping("/{groceryListId}/{productId}")
    public ResponseEntity<?> removeProducts (@PathVariable Integer groceryListId, @PathVariable Integer productId, Authentication authentication){
        String email = authentication.getName();

        try{
            GroceryList groceryList = groceryListServices.removeProductFromList(groceryListId, email, productId);
            return ResponseEntity.ok(groceryList);

        } catch (EntityNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product is not in the list");
        }
    }
}

