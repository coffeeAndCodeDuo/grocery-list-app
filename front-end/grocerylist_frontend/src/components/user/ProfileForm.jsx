import {useState, useEffect} from "react";
import { getUserProfile, changeUserNames } from '../../services/UserService.jsx';
import profileImg from '../../assets/profile.png';
import LogOutButton from "../../components/buttons/LogOutButton";
import { Check, X } from "lucide-react";
import ChangePasswordForm from "./ChangePasswordForm.jsx";
import BackArrow from "../../assets/arrow2.png";
import DeleteUserButton from '../buttons/DeleteUserButton';
import UpdateProfileImgButton from "../buttons/UpdateProfileImgButton.jsx";

export default function ProfileForm({ onClose } ){

    const [userInfo, setUserInfo]= useState(null);
    const [originalUserInfo, setOriginalUserInfo] = useState(null); //variavel que guarda a informação original
    const [passwordForm, setPasswordForm] = useState(false);

    const fetchUserInfo = async () => {
        const data = await getUserProfile();
        setUserInfo(data);
        setOriginalUserInfo(data);

    };

    useEffect(() => {
        fetchUserInfo();
    },  []);

    const handleClosePasswordForm = () => {
        setPasswordForm(false);
    }

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await changeUserNames(userInfo.firstName, userInfo.lastName);
            const updated = await getUserProfile(); 
            setUserInfo(updated);
            setOriginalUserInfo(updated);

        } catch (error) {
            console.error("Error updating profile infos", error);
        
        } 
    }


    //verifica se o nome que está no campo de input é igual ao nome que está guardado na base de dados 
    const verifyChangesFirstName = userInfo && originalUserInfo &&(
        userInfo.firstName !== originalUserInfo.firstName
    );

    const verifyChangesLastName = userInfo && originalUserInfo &&(
      userInfo.lastName !== originalUserInfo.lastName
    );  

    if(passwordForm){
        
        return (
            <div> 
                <img src={BackArrow} className="mt-5 ml-7 cursor-pointer w-8 h-auto" onClick={() => setPasswordForm(false)}></img>
                <ChangePasswordForm onChange={handleClosePasswordForm} /> 
            </div>
        );
    }

    const isLocal = window.location.hostname === "localhost";
    const BASE_URL = isLocal
        ? "http://localhost:8081/grocery-list"
        : "https://grocery-list-app-production-361d.up.railway.app";

    return(
        <div>
            <X className="mt-6 ml-8 cursor-pointer" size={20} onClick={onClose}/>
            <div className="flex flex-col justify-center items-center">
                
                <img src={ userInfo?.profileImageUrl?.startsWith("http")
                            ? userInfo.profileImageUrl
                            : `${BASE_URL}${userInfo?.profileImageUrl || ""}`
                } className="h-32 w-32 mt-16 rounded-full object-cover">
                </img>

                <div className="mt-6" >
                    <UpdateProfileImgButton
                        onUpdate={(newUrl) =>
                        setUserInfo((prev) => ({ ...prev, profileImageUrl: newUrl }))
                        }
                    />
                </div>
            </div>

            <form className="ml-8 mt-14 mr-8" onSubmit={handleSubmit}>
                <div className="relative">
                    <label htmlFor="firstName"><h5 className="font-semibold mb-1.5">First Name</h5></label>
                    <input 
                        type="text" 
                        name="firstName" value={userInfo?.firstName || ""} 
                        onChange={handleChange} 
                        className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-full mb-6 p-2 pr-10 cursor-pointer"
                        /> 

                    {verifyChangesFirstName &&
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-2 -mt-3" type="submit"><Check size={20}/></button>
                    }   
                </div>
                

                <div className="relative">
                    <label htmlFor="lastName"><h5 className="font-semibold mb-1.5">Last Name</h5></label>
                    <input 
                        type="text" 
                        name="lastName" value={userInfo?.lastName || ""} onChange={handleChange} className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-full mb-6 p-2 cursor-pointer">

                    </input>
                    {verifyChangesLastName &&
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-2 -mt-3" type="submit"><Check size={20}/></button>
                    } 
                </div>

                <div>
                    <label htmlFor="email"><h5 className="font-semibold mb-1.5">Email</h5></label>
                    <input type="text" value={userInfo?.email || ""} readOnly className="text-gray-500 focus:outline-none rounded-lg h-10 w-full mb-6 p-2"></input>
                </div>

                <div>
                    <label htmlFor="password"><h5 className="font-semibold mb-1.5">Password</h5></label>
                    <input type="text" placeholder="********" readOnly className="focus:outline-none text-gray-500 rounded-lg h-10 w-full mb-1 p-2"></input>
                    <p className="text-link-blue underline cursor-pointer" onClick={() => setPasswordForm(true)}>Change password</p>
                </div>
                <div className="flex justify-center mt-28"><LogOutButton/></div>
                <div className='flex justify-center mt-12 mb-6'><DeleteUserButton/></div>

            </form>
        </div>
    )
}
