package grocery_list_app.services.jwtservices;

import org.springframework.beans.factory.annotation.Value;

public class JwtService {

    @Value("${jwt.secret}")
    private String SECRET_KEY;
}
