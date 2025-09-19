import PrivateHeader from "../components/headers/PrivateHeader";
import AddListNameForm from "../components/forms/AddListNameForm";
import UpdateListNameForm from "../components/forms/UpdateListNameForm";
import {useParams} from "react-router-dom";
import MainCard from "../components/MainCard";
import { useState, useEffect } from "react";
import { getListById } from "../services/GroceryListService";

export default function ListPage() {
  const { listId } = useParams();
  const [listName, setListName] = useState("");
  const [listProducts, setListProducts] = useState([]);
  
  useEffect(() => {
    async function fetchList() {
      if (listId) {
        const data = await getListById(listId);
        setListName(data.name);

        if(data.products) {

          const products = [];
          data.products.forEach((product) => {
            products.push( <div key={product.id}><h6>{product.name}</h6></div>);
          });
          setListProducts(products);
        
        };
      }

    }
    fetchList();
  }, [listId]);


  const listNameForm = () => {
    return listId ?  (
          <UpdateListNameForm listId={listId} name={listName} />
        ) : (
          <AddListNameForm />
        )
  };    

  return (
    <div>
      <PrivateHeader />
      <MainCard 
      topContent={<div className="w-76 flex flex-row items-center justify-between pr-4">{listNameForm()}</div>}
      bottomContent={<div className="mt-8 mx-6 overflow-y-auto">
        {listProducts.length > 0 ? (
          <div className="space-y-3">
            {listProducts}
          </div>
        ) : (
          <div className="text-orange-highlight">Add products</div>
        )}
      </div>}
      bgColor="bg-light-yellow"
      />
    </div>

  );
}
