package grocery_list_app.controllers;

import grocery_list_app.model.User;
import grocery_list_app.services.UserServices;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

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
    public ResponseEntity<?> updateUserPassword(@Valid @RequestBody Map<String, String> body, Authentication authentication) {
        String email = authentication.getName();
        String currentPassword = body.get("currentPassword");
        String newPassword = body.get("newPassword");

        userServices.changeUserPassword(email, currentPassword, newPassword);

        return ResponseEntity.ok().body("Password updated");
    }

    @DeleteMapping({"/"})
    public ResponseEntity<?> deleteUser(Authentication authentication) {
        String email = authentication.getName();
        userServices.deleteUser(email);

        return ResponseEntity.noContent().build();
    }

    @PatchMapping({"/profile-image"})
    public ResponseEntity<?> updateUserImage(Authentication authentication, MultipartFile file){
        String email = authentication.getName();

        try{
            User updatedUser = userServices.updateUserProfileImage(email, file);
            return ResponseEntity.ok(updatedUser.getProfileImageUrl());

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }



    /*
    /grocery-list/profile/ -> PUT (Falta alterar foto - para mais tarde)
     */
}
