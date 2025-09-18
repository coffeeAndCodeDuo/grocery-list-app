import { useState, useEffect } from "react";
import { getAllLists } from "../../services/GroceryListService";

export default function DropDownButton() {

const [isOpen, setIsOpen] = useState(false);

const [selectedList, setSelectedList] = useState("Select a list");

const [listOptions, setListOptions] = useState([]);


const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

useEffect(() => { 

    const fetchLists = async () => {
        const lists = await getAllLists();
        setListOptions(lists);
    };
    fetchLists();
}, []);

const handleListSelection = (list) => {
    setSelectedList(list); 
    setIsOpen(false);

};    

const options = [];
listOptions.forEach((list) => {
    options.push(
        <div key={list.id} onClick={() => handleListSelection(list.name)} className="cursor-pointer hover:bg-gray-200 px-4 py-2">
            {list.name}
        </div>
    );
});



    return (
        <div className="w-full flex justify-between items-center">
            <span>{selectedList}</span>
            <button onClick={toggleDropdown}>+</button>
            {isOpen && (
                <div className="absolute bg-white border mt-2 rounded shadow-lg z-10">
                    {options}
                </div>
            )}
       
       
        </div>


    );
}