import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../services/AuthService";
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
                response = await loginRegister(
                    formData.email,
                    formData.password
                );

                navigate("/home");
            }

            console.log("Backend response:", response);

        } catch (error){
            console.log("Error:", error);
        }
    };

    //estrutura e logica do formulário
    return (
        <form onSubmit={handleSubmit}>
            {type === "register" && (
            <>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" //identifca o campo
            value={formData.firstName} //o react a verificar o estado do campo (useState)
            onChange={handleChange} //atualiza o campo quando o user escreve alguma coisa
            type="text" 
            placeholder="First Name"/> 

            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name"/>
            </>
            )}

            <label htmlFor="email">Email:</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email"/>

            <label htmlFor="password">Password:</label>
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password"/>

            <button>{type === "login" ? "Login" : "Register"} </button>

        </form>
    )
}