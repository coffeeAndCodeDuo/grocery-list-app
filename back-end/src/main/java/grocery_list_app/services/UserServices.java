package grocery_list_app.services;

import grocery_list_app.model.User;
import grocery_list_app.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class UserServices {

   private final UserRepository userRepository;
   private final PasswordEncoder passwordEncoder;

   private final String uploadDir;

    public UserServices(UserRepository userRepository, PasswordEncoder passwordEncoder, @Value("${app.upload.dir}") String uploadDir) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.uploadDir = uploadDir;
    }

    public User getUserById(Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found with email: " + email));
    }

    public User changeUserName(String email, String firstName, String lastName){
        User user = getUserByEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);

        return userRepository.save(user);
    }

    //falta adiconar a confirmação da nova password
    public User changeUserPassword(String email, String currentPassword, String newPassword){
        User user = getUserByEmail(email);

        if(!passwordEncoder.matches(currentPassword, user.getPassword())){
            throw new RuntimeException("Current password is incorrect");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        return userRepository.save(user);
    }

    public void deleteUser(String email){
        User user = getUserByEmail(email);
        userRepository.delete(user);
    }

    public User updateUserProfileImage(String email, MultipartFile file) throws IOException {
        User user = getUserByEmail(email);

        // Verifica se é mesmo uma imagem
        if (file == null || file.isEmpty() || !file.getContentType().startsWith("image/")) {
            throw new IllegalArgumentException("O ficheiro não é uma imagem válida");
        }

        // Cria diretório se não existir
        File uploadFolder = new File(uploadDir).getAbsoluteFile();
        if (!uploadFolder.exists()) {
            uploadFolder.mkdirs();
        }

        // Gera nome único
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadFolder.getAbsolutePath(), fileName);

        // Guarda o ficheiro
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // Atualiza o caminho da imagem
        String imageUrl = "/uploads/" + fileName;
        user.setProfileImageUrl(imageUrl);

        return userRepository.save(user);
    }
}


