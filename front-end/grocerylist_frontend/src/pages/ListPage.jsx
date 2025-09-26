import PrivateHeader from "../components/headers/PrivateHeader";
import AddListNameForm from "../components/forms/AddListNameForm";
import UpdateListNameForm from "../components/forms/UpdateListNameForm";
import {useParams} from "react-router-dom";
import MainCard from "../components/MainCard";
import { useState, useEffect } from "react";
import { getListById } from "../services/GroceryListService";
import CheckBox from "../components/buttons/CheckBox";
import DeleteProductButton from "../components/buttons/DeleteProductButton";
import ListName from "../components/ListName";
import AddProductFromList from "../components/buttons/AddProductFromList";

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
            products.push( <div className="flex items-center justify-between w-full" key={product.id}>
              <div className="flex items-center">
              <CheckBox productId={product.id} listId={listId}/> 
              <h6 className="ml-2">{product.name}</h6>
              </div>
              <DeleteProductButton productId={product.id} groceryListId={listId} setListProducts={setListProducts}/>
              </div>);
              
          });
          setListProducts(products);
        
        };
      }

    }
    fetchList();
  }, [listId]);


  const listNameForm = () => {
    return listId ?  (
          <ListName listId={listId} name={listName} />
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
          <div className="space-y-2">
            {listProducts}
            <div><AddProductFromList /></div>
          </div>
        ) : (
          <div><AddProductFromList /></div>
        )}
      </div>}
      bgColor="bg-light-yellow"
      />
    </div>

  );
}
