package grocery_list_app.model.products;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ProductType {
    FRUITS("fruits"),
    VEGETABLES("vegetables"),
    MEAT("meat"),
    FISH("fish"),
    CHARCUTERIE("charcuterie"),
    BAKERY("bakery"),
    DAIRY("dairy"), //lacticinios
    PANTRYITEM("pantryitem"), //artigos de mercearia
    DRINKS("drinks"),
    ALCOHOLICDRINKS("alcoholicdrinks"),
    HOMECLEANING("homecleaning"),
    HEALTHBEAUTY("healthbeauty");

    private String value;

    ProductType(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
