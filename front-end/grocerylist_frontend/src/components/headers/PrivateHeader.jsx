import { useEffect, useState } from "react";
import Header from './Header.jsx';
import { getUserProfile } from '../../services/UserService.jsx';

export default function PrivateHeader() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getUserProfile();
            setProfile(data);
        };
        fetchProfile();
    }, []);


    return (
        <div>
            <Header />
            <div>
                <img src={profile?.image} alt={profile?.name || "User"} />
            </div>

        </div>  
    );
};
