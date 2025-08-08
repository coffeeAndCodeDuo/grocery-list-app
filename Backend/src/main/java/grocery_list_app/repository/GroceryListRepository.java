package grocery_list_app.repository;

import grocery_list_app.model.GroceryList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryListRepository extends JpaRepository<GroceryList, Long> {

    GroceryList findByNameIgnoreCase(String name);

    GroceryList findById(Integer id);
}
