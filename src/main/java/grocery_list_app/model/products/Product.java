package grocery_list_app.model.products;

import grocery_list_app.model.GroceryList;
import jakarta.persistence.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.nio.MappedByteBuffer;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Enumerated(EnumType.STRING)
    private ProductType type;

    @Lob
    private byte[] image;

    @ManyToMany(mappedBy = "myGroceryList")
    private List<GroceryList> groceryList = new ArrayList<>();


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public ProductType getType() {
        return type;
    }

    public byte[] getImage() {
        return image;
    }
}
