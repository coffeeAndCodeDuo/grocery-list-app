import { useState, useEffect, use } from "react";
import { getAllLists, getListById } from "../services/GroceryListService";
import GroceryListService from "../services/GroceryListService";


export async function ListCard() {

    const [listName, setListName] = useState("");
    useEffect(() => { 
        const fetchListName = async () => {
            const data = await getListById();
            setListName(data.listName);
        };
        fetchListName();
    }, []);

    return (
        <div>
            <div>
                <h6>{listName?.name}</h6>
            </div>
        </div>
    )
}