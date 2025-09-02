import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { userRegister, userLogin } from "../../services/AuthService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserForm({type}){

    const navigate = useNavigate();
    //Guardar valores do formulario 
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
    //permite "atualizar" os valores que tenho sido escritos
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    //criar função para enviar os dados ao backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            let response;

            if(type === "register"){
                response = await userRegister(
                    formData.firstName,
                    formData.lastName,
                    formData.email,
                    formData.password
                );
                toast.success("Your account was created!");
                setTimeout(() => navigate("/"), 3000);
        
            } else if (type === "login"){
                response = await userLogin(
                    formData.email,
                    formData.password
                );

                navigate("/home");
            }

            console.log("Backend response:", response);

        } catch (error) {
            console.log("Error:", error);
            toast.error("Email or password incorrect");
        }
    };

    //estrutura e logica do formulário
    return (
        <form onSubmit={handleSubmit}>
            {type === "register" && (
            <>
            <div className="flex gap-4 mx-auto w-76">
                <div className="flex flex-col w-1/2 gap-1.5 mb-6">
                    <label htmlFor="firstName"><h5>First Name</h5></label>
                    <input name="firstName" //identifca o campo
                    value={formData.firstName} //o react a verificar o estado do campo (useState)
                    onChange={handleChange} //atualiza o campo quando o user escreve alguma coisa
                    type="text" 
                    placeholder="John"
                    className="border border-black rounded-lg h-10 w-full placeholder:text-xs pl-2 focus:outline-none focus:ring-black focus:ring-1"
                    /> 
                </div>

                <div className="flex flex-col w-1/2 gap-1.5 mb-6">
                    <label htmlFor="lastName"><h5>Last Name</h5></label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Doe"
                    className="border border-black rounded-lg h-10 w-full placeholder:text-xs pl-2 focus:outline-none focus:ring-black focus:ring-1"/>
                </div>
            </div>
            </>
            )}

            <div className="flex flex-col mx-auto w-76 mb-6 gap-1.5">
                <label htmlFor="email"><h5>Email</h5></label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email@example.com" 
                className="border border-black rounded-lg h-10 placeholder:text-xs pl-2 focus:outline-none focus:ring-black focus:ring-1"/>
            </div>

            <div className="flex flex-col mx-auto w-76 mb-4 gap-1.5">
            <label htmlFor="password"><h5>Password</h5></label>
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Enter your password"
            className="border border-black rounded-lg h-10 placeholder:text-xs pl-2 focus:outline-none focus:ring-black focus:ring-1"/>
            </div>

            <div>
                {type === "login" && (
                    <p className="text-xs text-center mb-48">Forget your password?</p>
                )}
            </div>
            
            <div className="flex justify-center mb-4 gap-1.5">
                <button 
                    className={
                        type === "login" 
                        ? "bg-button-green rounded-lg px-20 py-2 text-base text-white"
                        : "bg-button-green rounded-lg px-20 py-2 text-base text-white mt-16"
                    }>
                    {type === "login" ? "Login" : "Register"} 
                </button>
            </div>

        </form>
    )
}