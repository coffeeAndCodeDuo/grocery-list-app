import AddListButton from "./buttons/AddListButton"
import ListCard from "./ListCard"

export default function HomeLists() {
    return (
        <div className="flex flex-col gap-0.5">
            <div className="bg-light-orange rounded-t-lg h-10 mx-6 mt-12 flex items-center justify-between p-4">
                <h5>My Lists</h5>
                <AddListButton />
            </div>    
            <div className="bg-light-yellow rounded-b-lg h-48 mx-6 pt-2">
                <ListCard type="home"/>
            </div>
           
        </div>
    )
}
