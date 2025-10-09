import { changeUserPassword } from "../../services/UserService";
import { toast } from "react-toastify";

export default function ChangePasswordForm({ onChange }){

    const handleSubmit = async (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password === confirmPassword && password.length < 8){
            toast.error("Password must be at least 8 characters long", { autoClose: 1000 });
            return;
        }

        if(password === confirmPassword){

            try{
                await changeUserPassword(password);
                toast.success("Password changed successfully", { autoClose: 1000 });
                if (onChange) onChange();
            } catch (error){
                console.error("Error changing password", error);
            }

        } else {
            toast.error("Passwords do not match", { autoClose: 1000 });
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="ml-8 mt-14 mr-8">
                <label htmlFor="password"><h5 className="font-semibold mb-1.5">New password</h5></label>
                <input type= "password"  name="password" placeholder="New password" className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-full mb-6 p-2 cursor-pointer"/>

                <label htmlFor="confirmPassword"><h5 className="font-semibold mb-1.5">Confirm password</h5></label>
                <input type= "password"  name="confirmPassword" placeholder="Confirm password" className="focus:outline-none focus:ring-black focus:ring-1 rounded-lg h-10 w-full mb-6 p-2 cursor-pointer"/>

                <button type="submit" className="bg-button-green rounded-lg px-10 py-2 text-sm text-white ">Change password</button>
            </form>
        </div>
    )
}