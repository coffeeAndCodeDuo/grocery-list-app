import { useState, useEffect} from "react";
import { getAllLists} from "../services/GroceryListService";
import { Link } from "react-router-dom";
import { deleteListById } from "../services/GroceryListService";


export default function ListCard() {

    const [lists, setLists] = useState([]);
    useEffect(() => { 
        const fetchLists = async () => {
            const data = await getAllLists();
            setLists(data);
        };
        fetchLists();
    }, []);

    const handleDelete = async (listId) => {
        try {
            await deleteListById(listId);
            setLists(lists.filter((list) => list.id !== listId));
        } catch (error) {
            console.error("Failed to delete list:", error);
        }
    }

    if (lists.length <= 3 && lists.length > 0){
        const userLists = [];
        lists.forEach((list) => {
            userLists.push(<div key={list.id} className="bg-white rounded-lg h-10 flex items-center justify-between mx-4 mt-1 p-4"><h7>{list.name}</h7>
                <button onClick={() => handleDelete(list.id)}><h7>🗑</h7></button>
            </div>)
        });

        return (
            <div>
                <div>{userLists}</div>
            </div>
        )
    }

    if(lists.length > 3){
        const userLists = [];
        for (let i = 0; i < 3; i++){
            userLists.push(<div key={lists[i].id} className="bg-white rounded-lg h-10 flex items-center justify-between mx-4 mt-1 p-4">
                <h7>{lists[i].name}</h7>
                <button onClick={() => handleDelete(lists[i].id)}><h7>🗑</h7></button>
            </div>)
        }

        return (
            <div>
                <div>
                    {userLists}
                    <div className="flex justify-center mt-4 text-sm text-orange-highlight underline">
                    <Link to="/my-lists">Show all</Link>
                    </div>
                </div>
            </div>
        )
    } 

    if(lists.length === 0){
        return(<div className="flex text-orange-highlight items-center h-full w-full justify-center">
            <h7>You don't have any lists</h7>
        </div>);
    }
}