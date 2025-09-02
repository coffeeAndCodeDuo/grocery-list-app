import Header from "../components/Header";
import UserForm from "../components/auth/UserForm";
import {Link} from "react-router-dom";


export default function Register() {
  return (
    <div>
      <Header />
      <div className="mx-auto w-76 mb-6">
         <h3>Create your account</h3>
      </div>

      <UserForm type="register"/>

      <div className="flex gap-1 justify-center">
          <h6>Already have an account?</h6>
          <Link to="/" className="text-sm text-link-blue hover:underline">Login</Link>
      </div>

      
    </div>
  );
}
