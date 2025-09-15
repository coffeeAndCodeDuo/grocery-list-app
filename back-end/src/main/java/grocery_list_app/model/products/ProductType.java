package grocery_list_app.model.products;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ProductType {
    FRUITS("Fruits"),
    VEGETABLES("Vegetables"),
    MEAT("Meat"),
    FISH("Fish"),
    CHARCUTERIE("Charcuterie"),
    BAKERY("Bakery"),
    DAIRY("Dairy"), //lacticinios
    PANTRYITEM("Pantry Items"), //artigos de mercearia
    DRINKS("Drinks"),
    ALCOHOLICDRINKS("Alcoholic Drinks"),
    HOMECLEANING("Home Cleaning"),
    HEALTHBEAUTY("Health & Beauty");

    private String value;

    ProductType(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
