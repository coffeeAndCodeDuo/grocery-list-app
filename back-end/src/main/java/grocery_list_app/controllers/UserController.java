package grocery_list_app.controllers;

import grocery_list_app.model.User;
import grocery_list_app.services.UserServices;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("/api/profile")
public class UserController {

    private final UserServices userServices;

    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping({"", "/"})
    public ResponseEntity<User> listUserInfo(Authentication authentication) {
        String email = authentication.getName();
        User user = userServices.getUserByEmail(email);

        return ResponseEntity.ok(user);
    }

    @PutMapping({"", "/"})
    public ResponseEntity<User> updateUserNames(@RequestBody User user, Authentication authentication) {
        String email = authentication.getName();
        User newUserName = userServices.changeUserName(email, user.getFirstName(), user.getLastName());

        return ResponseEntity.ok(newUserName);
    }

    @PutMapping({"/password"})
    public ResponseEntity<?> updateUserPassword(@Valid @RequestBody User user, Authentication authentication) {
        String email = authentication.getName();
        userServices.changeUserPassword(email, user.getPassword());

        return ResponseEntity.ok().body("Password updated");
    }

    /*
    /grocery-list/profile/ -> PUT (Falta alterar foto - para mais tarde)
     */
}
