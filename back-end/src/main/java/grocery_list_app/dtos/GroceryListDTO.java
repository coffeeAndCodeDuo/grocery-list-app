package grocery_list_app.dtos;

public class GroceryListDTO {

    private Integer id;
    private String name;

    public GroceryListDTO(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
