package grocery_list_app.model;

import grocery_list_app.model.products.Product;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "grocery_list")
public class GroceryList {
    //Começar por aqui amanha: Problema de ligar a lista ao serviço.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @ManyToMany
    @JoinTable (
            name = "grocerylist_products",
            joinColumns = @JoinColumn(name = "grocerylist_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> myGroceryList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public GroceryList(List<Product> myGroceryList){
        this.myGroceryList = myGroceryList;
    }

    public GroceryList() {

    }

    public List<Product> getMyGroceryList() {
        return myGroceryList;
    }

    public void setMyGroceryList(List<Product> myGroceryList) {
        this.myGroceryList = myGroceryList;
    }
}
