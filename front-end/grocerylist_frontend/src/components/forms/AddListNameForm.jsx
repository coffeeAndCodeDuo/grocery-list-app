import { useState } from "react";
import { createNewList } from "../../services/GroceryListService";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button type="submit">ok</button>
        <h1>Teste</h1>
    </form>
    );

}