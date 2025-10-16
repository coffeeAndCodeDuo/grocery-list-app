import { useState, useEffect } from "react";
import UpdateListNameForm from "./forms/UpdateListNameForm";
import { X, Pencil, } from "lucide-react";

export default function ListName({ listId, name}) {
    const [editName, setEditName] = useState(false);
    const [currentName, setCurrentName] = useState(name);

    useEffect(() => {
        setCurrentName(name);
    }, [name]);

  return (
    <div className="w-76 flex flex-row items-center gap-2 pr-4">
      {editName ? (
        <>
          <div className="flex-1">
            <UpdateListNameForm listId={listId} name={currentName} onSuccess={(updatedName) => { setCurrentName(updatedName); setEditName(false); }} />
          </div>
          <div className="flex items-center mr-4 ml-2">
            <button onClick={() => setEditName(false)}><X size={20} /></button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center flex-1 gap-4">
            <h4>{currentName}</h4>
            <button onClick={() => setEditName(true)}><Pencil strokeOpacity={0.5} size={17} /></button>
          </div>
        </>
      )}
    </div>
  );
}