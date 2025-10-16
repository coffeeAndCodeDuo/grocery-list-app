import { removeProductFromList } from "../../services/GroceryListService";
import { toast } from "react-toastify";
import orangeTrash from "../../assets/orangeTrash.png";
import { Trash } from "lucide-react";


export default function DeleteProductButton({groceryListId, productId, setListProducts}) {

    const handleDeleteProduct = async () => {
        
        try{
            await removeProductFromList(groceryListId, productId);
            setListProducts(prevProducts => prevProducts.filter(p => p.key !== String(productId)));
            localStorage.setItem(`checkbox-checked-${groceryListId}-${productId}`, false);
            toast.success("Product removed from list", {autoClose: 1000});
        } catch (error) {
            toast.error("Failed to remove product from list", {autoClose: 1000});
        }
    };

    return (
        <div>
            <Trash strokeOpacity={0.5} size={15} onClick={handleDeleteProduct} className="text-orange-highlight flex items-center cursor-pointer"/>
        </div>
    );
}