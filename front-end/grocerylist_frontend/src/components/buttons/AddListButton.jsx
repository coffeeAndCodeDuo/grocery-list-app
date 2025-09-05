import { useNavigate } from "react-router-dom";

export default function AddListButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/my-list/new");
    }
    return (
        <button className="text-orange-highlight" onClick={handleClick}><h2>+</h2></button>
    )
}