import { useNavigate } from "react-router-dom";
import BackArrow from '../../assets/arrow2.png';

export default function BackButton2() {
   const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-2)} className="mt-6 mb-4 px-8 flex flex-row gap-2"><img src={BackArrow} className="w-8 h-auto"></img></button>
        </div>
    ); 
}