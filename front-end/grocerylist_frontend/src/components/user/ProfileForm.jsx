import {useState, useEffect} from "react";
import { getUserProfile, changeUserNames } from '../../services/UserService.jsx';
import profileImg from '../../assets/profile.png';
import LogOutButton from "../../components/buttons/LogOutButton";

export default function ProfileForm(){

    const [userInfo, setUserInfo]= useState(null);
    const [originalUserInfo, setOriginalUserInfo] = useState(null); //variavel que guarda a informação original

    useEffect(() => {
        const fetchUserInfo = async () => {
        const data = await getUserProfile();
        setUserInfo(data);
        setOriginalUserInfo(data);
      };
      fetchUserInfo();
    },  []);

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const update = await changeUserNames(userInfo.firstName, userInfo.lastName)

        } catch (error) {
            console.error("Error updating profile infos", error);
        
        } 
    }
    //verifica se o nome que esta no campo de input é igual ao nome que esta guardado na base de dados 
    const verifyChangesFirstName = userInfo && originalUserInfo &&(
        userInfo.firstName !== originalUserInfo.firstName
    );

    const verifyChangesLastName = userInfo && originalUserInfo &&(
      userInfo.lastName !== originalUserInfo.lastName
    );  

    return(
        <div>
            <div className="flex justify-center">
                <img src={profileImg} className="h-32 w-auto mt-20"></img>
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
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-2" type="submit">ok</button>
                    }   
                </div>
                

                <div>
                    <label htmlFor="lastName"><h5 className="font-semibold mb-1.5">Last Name</h5></label>
                    <input 
                        type="text" 
                        name="lastName" value={userInfo?.lastName || ""} onChange={handleChange} className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-56 mb-6 p-2 cursor-pointer"></input>
                </div>

                <div>
                    <label htmlFor="email"><h5 className="font-semibold mb-1.5">Email</h5></label>
                    <input type="text" value={userInfo?.email || ""} readOnly className="text-gray-500 focus:outline-none rounded-lg h-10 w-56 mb-6 p-2"></input>
                </div>

                <div>
                    <label htmlFor="password"><h5 className="font-semibold mb-1.5">Password</h5></label>
                    <input type="text" placeholder="********" readOnly className="focus:outline-none text-gray-500 rounded-lg h-10 w-56 mb-1 p-2"></input>
                    <p className="text-link-blue underline cursor-pointer">Change password</p>
                </div>
                <div className="flex justify-center mt-28 "><LogOutButton/></div>
                

            </form>
        </div>
    )
    

}