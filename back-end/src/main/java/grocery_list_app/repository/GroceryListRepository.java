package grocery_list_app.repository;

import grocery_list_app.model.GroceryList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroceryListRepository extends JpaRepository<GroceryList, Integer> {

    Optional<GroceryList> findByNameIgnoreCase(String name);
}
