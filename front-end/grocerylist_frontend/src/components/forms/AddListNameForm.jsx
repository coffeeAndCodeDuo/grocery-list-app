import { useState } from "react";
import { createNewList } from "../../services/GroceryListService";
import { useNavigate } from "react-router-dom";
import checkImg from '../../assets/check-icon.png';

export default function AddListNameForm() {
    
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await createNewList(name);
        console.log("Backend response:", response);

        navigate("/my-list/"+ response.id);
        
    }    

    return (
    <form className="flex flex-row items-center" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insert list name" 
            className="bg-transparent border-none p-0 m-0 focus:outline-none focus:ring-0 placeholder-orange-highlight"></input>

        {name && (
            <button type="submit"> <img src={checkImg} alt="submit" className="h-10 w-10"/></button>
    )}
    </form>
    );

}