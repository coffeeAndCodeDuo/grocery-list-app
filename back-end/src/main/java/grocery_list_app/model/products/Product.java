package grocery_list_app.model.products;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import grocery_list_app.model.GroceryList;
import jakarta.persistence.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.nio.MappedByteBuffer;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Enumerated(EnumType.STRING)
    private ProductType type;

    @Lob
    private byte[] image;

    @ManyToMany(mappedBy = "products")
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

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    @Override
    public String toString(){
        return name;
    }
}
