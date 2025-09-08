import profileImg from '../../assets/profile.png';
import ArrowImg from '../../assets/arrow.svg'

export default function PrivateHeader() {
    return (
    <div>
        <div className="flex items-center justify-between w-80 p-4 mb-12 mx-auto"> 
            <button ><img src={ArrowImg} alt="arrow" /></button>
            <h1 className="w-full text-center">Grocery List</h1>
            <img src={profileImg} alt="User" className="h-8 w-8 object-cover"/>
        </div>  
    </div>
    );
};
