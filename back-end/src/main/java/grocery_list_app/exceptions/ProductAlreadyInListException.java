package grocery_list_app.exceptions;

public class ProductAlreadyInListException extends RuntimeException{

    public ProductAlreadyInListException(String message) {
        super(message);
    }
}
