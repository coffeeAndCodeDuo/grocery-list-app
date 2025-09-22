import { toast } from "react-toastify";
import { addProductToList } from "../../services/GroceryListService";

export default function AddProductButton({productId}) {

    const handleAddProduct = async () => {
        const selectedListId = localStorage.getItem("selectedListId_" + localStorage.getItem("userId"));
        if (!selectedListId) {
            toast.error("Please select a list first", {autoClose: 1500});
            return;
        }

        try{
            await addProductToList(selectedListId, productId);
            toast.success("Product added to list", {autoClose: 1000});
        } catch (error) {
            toast.error("Product already in the list", {autoClose: 1000});
        }
    };

    return (
        <div>
            <button onClick={handleAddProduct} className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-blue-add text-white rounded-full shadow text-sm">+</button>
        </div>
    );
}