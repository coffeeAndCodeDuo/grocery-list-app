import { useState } from 'react';
import profileImg from '../../assets/profile.png';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../user/ProfileForm';
import { X } from "lucide-react";
import DeleteUserButton from '../buttons/DeleteUserButton';


export default function PrivateHeader({ onClose }) {

    const navigate = useNavigate();
    const [profileOpen, setProfileOpen] = useState(false);

    const handleClose = () => {
        setProfileOpen(false);
        if(onClose) onClose();
    }

    return (
    <div>
        <div className="flex items-center justify-between w-80 p-4 mb-12 mx-auto"> 
            <h1 onClick={() => {navigate("/home")}} className="w-full text-center cursor-pointer font-semibold">Grocery List</h1>
            <img src={profileImg} alt="User" className="h-8 w-8 object-cover cursor-pointer" 
            onClick={() => setProfileOpen(true)}/>
            {profileOpen && (
                    <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                )}

            <div className={`fixed right-0 bottom-0 h-full w-2/3 bg-background-grey overflow-y-auto text-black z-50 transform transition-transform duration-300 ${
                        profileOpen ? "translate-x-0" : "translate-x-full"
                    } shadow-lg`}>
                        <X className="mt-6 ml-8 cursor-pointer" size={20} onClick={handleClose}/>
                        <ProfileForm/>
                        <div className='flex justify-center mt-12 mb-6'><DeleteUserButton/></div>
            </div>

        </div>  
    </div>
    );
};
