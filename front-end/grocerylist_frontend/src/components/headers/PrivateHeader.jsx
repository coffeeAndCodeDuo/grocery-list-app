import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../user/ProfileForm';
import { getUserProfile } from '../../services/UserService.jsx';

export default function PrivateHeader({ onClose }) {

    const navigate = useNavigate();
    const [profileOpen, setProfileOpen] = useState(false);
    const [profile, setProfile] = useState(null);
    
    const fetchProfile = async () => {
        const data = await getUserProfile();
        setProfile(data);
    };
    
    useEffect(() => {
        fetchProfile();
    }, []);

    const handleClose = () => {
        setProfileOpen(false);
        if(onClose) onClose();
        fetchProfile();
    }

    return (
    <div>
        <div className="flex items-center justify-between w-80 p-4 mb-12 mx-auto"> 
            <h1 onClick={() => {navigate("/home")}} className="w-full text-center cursor-pointer font-semibold">Grocery List</h1>
            <img
                src={`http://localhost:8081/grocery-list${profile?.profileImageUrl}`} className="w-8 h-8 rounded-full cursor-pointer object-cover"
                onClick={() => setProfileOpen(true)}
            />

            {profileOpen && (
                    <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                )}

            <div className={`fixed right-0 bottom-0 h-full w-2/3 bg-background-grey overflow-y-auto text-black z-50 transform transition-transform duration-300 ${
                        profileOpen ? "translate-x-0" : "translate-x-full"
                    } shadow-lg`}>
                        <ProfileForm onClose={handleClose}/>
            </div>

        </div>  
    </div>
    );
};
