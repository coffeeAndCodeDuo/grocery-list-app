import PrivateHeader from "../components/headers/PrivateHeader";
import MainCard from "../components/MainCard";
import { useEffect, useState } from "react";
import { getUserProfile } from '../services/UserService.jsx';


export default function Home() {
     const [profile, setProfile] = useState(null);

          useEffect(() => {
            const fetchProfile = async () => {
            const data = await getUserProfile();
            setProfile(data);
          };
          fetchProfile();
          },  []);
    

  return (
    <div>
      <PrivateHeader />
      <MainCard 
        topContent={<h4>Hi, {profile?.firstName} 👋 </h4>}
      />
    </div>
  );
}
