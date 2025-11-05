import {deleteUserAccount} from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function DeleteUserButton() {

    const navigate = useNavigate();

    const onDelete = async () => {
        try {
            await deleteUserAccount();
            toast.success("Account deleted successfully");
            navigate("/");
            
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    };    

    return (
        <button onClick={onDelete} className="text-base text-xs cursor-pointer">
            Delete Account
        </button>
    );
}