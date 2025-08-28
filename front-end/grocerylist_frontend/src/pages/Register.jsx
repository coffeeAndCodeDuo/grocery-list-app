import Header from "../components/Header";
import UserForm from "../components/UserForm";
import {Link} from "react-router-dom";


export default function Register() {
  return (
    <div>

      <Header />
      <h2>Create your account</h2>
      <h5>Already have an account?</h5><Link to="/">Login</Link>

      <UserForm type="register"/>

      
    </div>
  );
}
