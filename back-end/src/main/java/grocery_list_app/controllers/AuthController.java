package grocery_list_app.controllers;

import grocery_list_app.model.User;
import grocery_list_app.repository.UserRepository;
import grocery_list_app.services.jwtservices.CustomUserDetails;
import grocery_list_app.services.jwtservices.JwtService;
import grocery_list_app.services.jwtservices.JwtUserDetailsService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final JwtUserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, JwtService jwtService, JwtUserDetailsService userDetailsService, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );

            CustomUserDetails userDetails = (CustomUserDetails) userDetailsService.loadUserByUsername(email);

            String token = jwtService.generateToken(userDetails);

            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(response);

        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody User newUser) {
        if (userRepository.findByEmailIgnoreCase(newUser.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already registered");
        }

        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));

        newUser.setProfileImageUrl("/profile_images/default-profile.png");

        userRepository.save(newUser);

        return ResponseEntity.ok("User registered successfully");
    }
}
