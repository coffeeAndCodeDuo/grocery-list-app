import { changeUserPassword } from "../../services/UserService";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function ChangePasswordForm({ onChange }){

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        //para conseguir os valores dos inputs
        const formData = new FormData(e.target);
        const currentPassword = formData.get('currentPassword');
        const newPassword = formData.get('newPassword');
        const confirmPassword = formData.get('confirmPassword');

        if(currentPassword === newPassword){
            toast.error("Choose a different password", { autoClose: 1500 });
            return;
        }

        if(newPassword === confirmPassword && newPassword.length < 8){
            toast.error("Password must be at least 8 characters long", { autoClose: 1000 });
            return;
        }

        if(newPassword === confirmPassword){

            try{
                await changeUserPassword(currentPassword, newPassword);
                toast.success("Password changed successfully", { autoClose: 1000 });
                if (onChange) onChange();
            } catch (error){
                toast.error("Current password is incorrect", { autoClose: 1000 });
                console.error("Error changing password", error);
            }

        } else {
            toast.error("Passwords do not match", { autoClose: 1000 });
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="ml-8 mt-20 mr-8">
                {/* Current Password */}
                <label htmlFor="currentPassword"><h5 className="font-semibold mb-1.5">Current password</h5></label>
                <div className="relative">
                    <input type={showCurrentPassword ? "text" : "password"} name="currentPassword" placeholder="Enter your current password" className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-full mb-8 pl-2 pr-10 cursor-pointer placeholder-xs"/>
                    <button 
                    type="button" 
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)} 
                    className="absolute top-2.5 right-2 flex items-center text-gray-500">
                        {showCurrentPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>  
                </div>

                {/* New Password */}
                <label htmlFor="newPassword"><h5 className="font-semibold mb-1.5">New password</h5></label>
                <div className="relative">
                    <input type={showNewPassword ? "text" : "password"} name="newPassword" placeholder="Enter your new password" className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-full mb-8 pl-2 pr-10 cursor-pointer placeholder-xs"/>
                    <button 
                        type="button" 
                        onClick={() => setShowNewPassword(!showNewPassword)} 
                        className="absolute top-2.5 right-2 flex items-center text-gray-500">
                            {showNewPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>  
                </div>

                {/* Confirm Password */}
                <label htmlFor="confirmPassword"><h5 className="font-semibold mb-1.5">Confirm password</h5></label>
                <div className="relative">
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm your new password" className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-full mb-6 pl-2 pr-10 cursor-pointer placeholder-xs"/>
                    <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                        className="absolute top-2.5 right-2 flex items-center text-gray-500">
                            {showConfirmPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button> 
                </div>


                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-button-green rounded-lg px-4 py-2 mt-14 text-sm text-white ">Change password</button>
                </div>

            </form>
        </div>
    )
}