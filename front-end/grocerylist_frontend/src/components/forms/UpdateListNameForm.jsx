import { toast } from "react-toastify";
import { updateListName } from "../../services/GroceryListService";
import { useState } from "react";


export default function UpdateListNameForm({listId, name}) {
    //para começar com o nome atual da lista
    const [newName, setNewName] = useState(name);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
        await updateListName(listId, newName); 
        toast.success("List name updated!", { autoClose: 1500});
        }
        catch (error) {
            toast.error("Failed to update list name");
        }

    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
        <button type="submit">edit</button>
        <h1>Teste</h1>
    </form>
    );

}