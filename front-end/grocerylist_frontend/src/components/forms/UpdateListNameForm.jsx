import { toast } from "react-toastify";
import { updateListName } from "../../services/GroceryListService";
import { useState, useEffect } from "react";


export default function UpdateListNameForm({listId, name, onSuccess}) {

    //para começar com o nome atual da lista
    const [newName, setNewName] = useState("");

  // Atualiza newName sempre que name mudar
    useEffect(() => {
        setNewName(name);
    }, [name]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
        await updateListName(listId, newName); 
        toast.success("List name updated!", { autoClose: 1000});

        if (onSuccess) {
            onSuccess(newName);
        }

        }catch (error) {
            toast.error("Failed to update list name");
        }

    }

    return (
        <div>
            <form className="flex justify-between" onSubmit={handleSubmit}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder={name} 
                className="text-sm bg-transparent border-none p-0 m-0 focus:outline-none focus:ring-0 w-44"></input>
                <button className="ml-auto" type="submit">edit</button>
            </form>
        </div>
    );

}