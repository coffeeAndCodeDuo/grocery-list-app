import { useEffect, useState } from "react";
import profileImg from '../../assets/profile.png';
import { getUserProfile } from '../../services/UserService.jsx';

export default function PrivateHeader() {
    return (
        <div className="flex items-center justify-between w-80 p-4 mb-12 mt-20 mx-auto"> 
            <h1 className="w-full text-center">Grocery List</h1>
            <img src={profileImg} alt="User" className="h-8 w-8 object-cover"/>
        </div>  
    );
};
