import profileImg from '../../assets/profile.png';
import ArrowImg from '../../assets/arrow.svg'
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo_3.png';

export default function PrivateHeader() {

    const navigate = useNavigate();

    return (
    <div>
        <div className="flex items-center justify-between w-80 p-4 mb-12 mx-auto"> 
            {/*<button ><img src={ArrowImg} alt="arrow" /></button>*/}
            <h1 onClick={() => {navigate("/home")}} className="w-full text-center cursor-pointer font-semibold">Grocery List</h1>
            <img src={profileImg} alt="User" className="h-8 w-8 object-cover"/>
        </div>  
    </div>
    );
};
