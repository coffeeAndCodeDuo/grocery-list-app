import PrivateHeader from "../components/headers/PrivateHeader";
import AddListNameForm from "../components/forms/AddListNameForm";
import UpdateListNameForm from "../components/forms/UpdateListNameForm";
import { useParams} from "react-router-dom";

export default function ListPage() {
  const { listId } = useParams();

  return (
    <div>
      <PrivateHeader />

    <div>
        {listId ? (
          <UpdateListNameForm listId={listId} />
        ) : (
          <AddListNameForm />
        )}
      </div>

    </div>

  );
}
