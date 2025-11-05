import MainCard from "../components/MainCard";
import ListCard from "../components/ListCard";
import PrivateHeader from "../components/headers/PrivateHeader";
import AddListButton from "../components/buttons/AddListButton";
import BackButton from "../components/buttons/BackButton";

export default function AllLists() {
  
  return (
    <div>
      <BackButton type="backOne" />
      <PrivateHeader />
      <MainCard
        topContent={<div className="w-76 flex flex-row items-center justify-between pr-4"><h4>My Lists</h4> <AddListButton /></div>}
        bottomContent={<div className="mt-8"><ListCard type="all" /></div>}
        bgColor="bg-light-yellow"
      />
    </div>
  );
}

