import { useState, useEffect } from "react";
import { getAllLists } from "../../services/GroceryListService";
import dropup from "../../assets/dropup_arrow.png";
import dropdown from "../../assets/dropdown_arrow.png";

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

    const savedList = localStorage.getItem("selectedList");
    if (savedList) {
      setSelectedList(savedList);
    }
}, []);

const handleListSelection = (list) => {
    setSelectedList(list.name); 
    localStorage.setItem("selectedList", list.name);
    localStorage.setItem("selectedListId", list.id);
    setIsOpen(false);

};    

const options = [];
listOptions.forEach((list) => {
    options.push(
        <div key={list.id} onClick={() => handleListSelection(list)} className="bg-light-yellow px-2 py-1 rounded-lg text-xs mx-4 my-4 cursor-pointer hover:bg-light-orange">
            {list.name}
        </div>
    );
});

    return (
        <div className=" w-full relative flex justify-between items-center">
            <span><h6>{selectedList}</h6></span>

            <button onClick={toggleDropdown}>
                {isOpen ?(
                    <img src={dropup} className="w-8 h-8"/>
                )
                :(
                    <img src={dropdown} className="w-8 h-8"/>
                )}

            </button>
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white opacity-95 border mt-2 rounded-lg shadow-lg z-10 max-h-44 overflow-y-auto">
                    {options}
                </div>
            )}

        </div>

    );
}