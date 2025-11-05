import { useState } from "react";
import { createNewList } from "../../services/GroceryListService";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";


export default function AddListNameForm({type, onclose}) {
    
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(type === "nameInList"){
            let response = await createNewList(name);
            console.log("Backend response:", response);

            navigate("/my-list/"+ response.id, {state: { fromCreate: true }});
        }

        if(type === "nameInDropDown"){
            await createNewList(name);

            if (onclose) {
                onclose();
            }
        }    
        
    }   
    
    const style = type === "nameInList"
        ?"bg-transparent border-none p-0 m-0 focus:outline-none focus:ring-0 placeholder-orange-highlight"
        :"bg-light-yellow px-2 py-1 rounded-lg focus:outline-none focus:ring-0 placeholder-orange-highlight text-xs mt-3 mb-3 w-full mx-4";

    const checkButton = type === "nameInList"
        ? <Check size={20}/>
        : <Check size={14}/>;

    return (
        <form className="flex flex-row items-center w-full relative" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insert list name" className={`${style} pr-10`}></input>

            {name && (
                <button type="submit" className="absolute right-10 inset-y-0 flex items-center">{checkButton}</button>
            )}

            {type === "nameInDropDown" && (
                <button type="button" onClick={onclose} className="absolute right-5 inset-y-0 flex items-center">
                    <X size={17} />
                </button>
            )}
        </form>
    );

}