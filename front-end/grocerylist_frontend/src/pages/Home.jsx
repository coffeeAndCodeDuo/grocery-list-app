import PrivateHeader from "../components/headers/PrivateHeader";
import MainCard from "../components/MainCard";
import { useEffect, useState } from "react";
import { getUserProfile } from '../services/UserService.jsx';
import { useNavigate } from "react-router-dom";
import ListsInHomePage from "../components/ListsInHomePage.jsx";

export default function Home() {

  const navigate = useNavigate();
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
        bottomContent={
          <div className="mt-8">
            <ListsInHomePage /> 
            <div className="mx-6 mt-20 flex items-center">
              <button onClick={() => {navigate("/products")}} className="bg-light-blue rounded-lg h-14 w-full p-4 shadow-sm"
              ><h5>Products</h5>
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}
