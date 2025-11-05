package grocery_list_app.model.products;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum ProductType {
    FRUITS("Fruits\n" + "\uD83C\uDF49" + " \uD83C\uDF4E"),
    VEGETABLES("Vegetables\n" + "\uD83E\uDD66" + " \uD83E\uDD54" ),
    MEAT("Meat\n" + "\uD83E\uDD69" + " \uD83C\uDF57"),
    FISH("Fish\n" + "\uD83D\uDC1F" + " \uD83E\uDD90"),
    CHARCUTERIE("Charcuterie\n" + "\uD83E\uDD53" +  " \uD83C\uDF56"),
    BAKERY("Bakery\n" + "\uD83C\uDF5E" + " \uD83E\uDD50"),
    DAIRY("Dairy\n" + "\uD83E\uDDC0" + "\uD83E\uDD5B"), //lacticinios
    PANTRYITEM("Pantry Items\n" + "\uD83C\uDF6B" + " ☕\uFE0F"), //artigos de mercearia
    DRINKS("Drinks\n" + "\uD83E\uDD64" + " \uD83E\uDDC3"),
    ALCOHOLICDRINKS("Alcoholic Drinks\n" + "\uD83C\uDF7A" + " \uD83C\uDF77"),
    HOMECLEANING("Home Cleaning\n" + "\uD83E\uDDF9" + " \uD83E\uDDFA"),
    HEALTHBEAUTY("Health & Beauty\n" + "\uD83E\uDDF4" + " \uD83E\uDEA5");

    private String displayName;

    ProductType(String displayName) {
        this.displayName = displayName;
    }

    @JsonProperty("id")
    public String getId() {
        return name().toLowerCase();
    }

    @JsonProperty("displayName")
    public String getDisplayName() {
        return displayName;
    }

}
