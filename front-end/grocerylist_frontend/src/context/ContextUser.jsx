import { createContext, useState, useEffect, useContext } from "react";
import { getUserProfile } from '../services/UserService.jsx';

const ContextUser = createContext();

export function UserProvider({ children }) {
    
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getUserProfile();
            setProfile(data);
        };
        fetchProfile();
        },  
        []);

    return (
        <ContextUser.Provider value={{ profile, setProfile }}>
            {children}
        </ContextUser.Provider>
    );


}        
