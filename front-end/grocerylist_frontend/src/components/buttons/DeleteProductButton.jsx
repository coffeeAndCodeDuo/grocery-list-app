import { removeProductFromList } from "../../services/GroceryListService";
import { toast } from "react-toastify";
import orangeTrash from "../../assets/orangeTrash.png";


export default function DeleteProductButton({groceryListId, productId, setListProducts, setIsChecked}) {

    const handleDeleteProduct = async () => {
        
        
        try{
            await removeProductFromList(groceryListId, productId);
            setListProducts(prevProducts => prevProducts.filter(p => p.key !== String(productId)));
            setIsChecked(false);
            toast.success("Product removed from list", {autoClose: 1000});
        } catch (error) {
            toast.error("Failed to remove product from list", {autoClose: 1000});
        }
    };

    return (
        <div>
            <img onClick={handleDeleteProduct} src={orangeTrash} className="w-10 h-10 flex items-center justify-center cursor-pointer"/>
        </div>
    );
}