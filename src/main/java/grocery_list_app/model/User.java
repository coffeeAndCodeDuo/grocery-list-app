package grocery_list_app.model;

import jakarta.persistence.Lob;

public class User {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @Lob
    private byte[] image;


    public Integer getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public byte[] getImage() {
        return image;
    }
}
