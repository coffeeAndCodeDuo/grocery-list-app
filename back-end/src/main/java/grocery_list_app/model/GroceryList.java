package grocery_list_app.model;

import com.fasterxml.jackson.annotation.*;
import grocery_list_app.model.products.Product;
import jakarta.persistence.*;

import java.util.*;

@Entity
@Table(name = "grocery_list")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class GroceryList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @ManyToMany (cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinTable (
            name = "grocerylist_products",
            joinColumns = @JoinColumn(name = "grocerylist_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    @OrderColumn(name = "product_order") // mantém a ordem de inserção
    private List<Product> products = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference("user-groceryList")
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString(){
        return name;
    }
}
