package grocery_list_app.model;

import grocery_list_app.model.products.Products;

import java.util.List;

public class UserGroceryList {
    //Começar por aqui amanha: Problema de ligar a lista ao serviço.
    private List<Products> myGroceryList;

    public List<Products> getMyGroceryList() {
        return myGroceryList;
    }

    public void setMyGroceryList(List<Products> myGroceryList) {
        this.myGroceryList = myGroceryList;
    }
}
