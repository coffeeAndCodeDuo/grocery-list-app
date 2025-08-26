package grocery_list_app.config;

import grocery_list_app.model.products.ProductType;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ProductTypeConverter implements Converter<String, ProductType> {

    @Override
    public ProductType convert(String value) {
        return ProductType.valueOf(value.toUpperCase());
    }
}
