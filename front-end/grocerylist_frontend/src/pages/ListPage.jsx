import PrivateHeader from "../components/headers/PrivateHeader";
import AddListNameForm from "../components/forms/AddListNameForm";
import UpdateListNameForm from "../components/forms/UpdateListNameForm";
import {useParams, useState} from "react-router-dom";
import MainCard from "../components/MainCard";

export default function ListPage() {
  const { listId } = useParams();
  const [listName, setListName] = useState("");

  useEffect(() => {
    async function fetchList() {
      if (listId) {
        const data = await getListById(listId);
        setListName(data.name);
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
      bottomContent={<div className="mt-8"></div>}
      bgColor="bg-light-yellow"
      />
    </div>

  );
}
