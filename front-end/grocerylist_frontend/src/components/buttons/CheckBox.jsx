import { useEffect, useState } from "react";
import { CheckIcon } from "../CheckIcon";

export default function CheckBox({productId, listId}) {
    
    const [isChecked, setIsChecked] = useState(() => {
        const saved = localStorage.getItem(`checkbox-checked-${listId}-${productId}`);
        return saved === "true";
    }); 

    useEffect(() =>{
        localStorage.setItem(`checkbox-checked-${listId}-${productId}`, isChecked);
    }, [isChecked, productId, listId]);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center" onClick={toggleCheck}>
            <div className={`h-5 w-5 rounded-full flex items-center justify-center border-2 border-orange-highlight cursor-pointer ${isChecked ? 'bg-orange-highlight' : ''}`}>
                {isChecked && <CheckIcon className="h-4 w-4 text-white" />}
            </div>
        </div>
    );
}