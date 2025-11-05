import PrivateHeader from "../components/headers/PrivateHeader";
import AddListNameForm from "../components/forms/AddListNameForm";
import {useLocation, useParams} from "react-router-dom";
import MainCard from "../components/MainCard";
import { useState, useEffect } from "react";
import { getListById } from "../services/GroceryListService";
import CheckBox from "../components/buttons/CheckBox";
import DeleteProductButton from "../components/buttons/DeleteProductButton";
import ListName from "../components/ListName";
import AddProductFromList from "../components/buttons/AddProductFromList";
import BackButton from "../components/buttons/BackButton";

export default function ListPage() {
  const { listId } = useParams();
  const [listName, setListName] = useState("");
  const [listProducts, setListProducts] = useState([]);

  const location = useLocation();
  const fromCreate = location.state?.fromCreate || false; //fromCreate é uma flag que indica que o user veio da pagina de criação da lista, que permite definir se quando se faz back se anda 1 ou 2 páginas
  
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
  
  useEffect(() => {
    fetchList();
  }, [listId]);


  const listNameForm = () => {
    return listId ?  (
          <ListName listId={listId} name={listName} />
        ) : (
          <AddListNameForm type="nameInList" />
        )
  };    

  return (
    <div>
      <BackButton type={fromCreate ? "backTwo" : "backOne"} />
      <PrivateHeader />
      <MainCard 
        topContent={<div className="w-76 flex flex-row items-center justify-between pr-4">{listNameForm()}</div>}
        bottomContent={<div className="mt-8 mx-6 overflow-y-auto">

        {location.pathname == "/my-list/new"
        ? null
        : listProducts.length > 0 ? (
          <div className="space-y-2">
            {listProducts}
            <div><AddProductFromList onClose={fetchList}/></div>
            
          </div>
        ) : (
          <div><AddProductFromList onClose={fetchList}/></div>
        )}
          </div>
        }
        
        bgColor="bg-light-yellow"
      />
    </div>

  );
}
