package grocery_list_app.model.products;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Products {

    @Id
    private Integer id;
    private String name;
    private ProductsType type;
    @Lob
    private byte[] image;


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public ProductsType getType() {
        return type;
    }

    public byte[] getImage() {
        return image;
    }
}
