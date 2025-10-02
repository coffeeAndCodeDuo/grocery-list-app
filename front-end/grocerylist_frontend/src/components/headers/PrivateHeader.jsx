import { useState } from 'react';
import profileImg from '../../assets/profile.png';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../user/ProfileForm';


export default function PrivateHeader() {

    const navigate = useNavigate();
    const [profileOpen, setProfileOpen] = useState(false);

     const handleClose = () => {
        setProfileOpen(false);
    }

    return (
    <div>
        <div className="flex items-center justify-between w-80 p-4 mb-12 mx-auto"> 
            <h1 onClick={() => {navigate("/home")}} className="w-full text-center cursor-pointer font-semibold">Grocery List</h1>
            <img src={profileImg} alt="User" className="h-8 w-8 object-cover" 
            onClick={() => setProfileOpen(true)}/>
            {profileOpen && (
                    <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-50 z-40 "></div>
                )}

            <div className={`fixed right-0 bottom-0 h-full w-2/3 bg-background-grey text-black z-50 transform transition-transform duration-300 ${
                        profileOpen ? "translate-x-0" : "translate-x-full"
                    } shadow-lg`}>
                        <ProfileForm/>
            </div>

        </div>  
    </div>
    );
};
