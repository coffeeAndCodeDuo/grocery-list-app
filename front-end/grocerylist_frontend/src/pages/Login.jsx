import Header from "../components/headers/Header.jsx";
import {Link } from "react-router-dom";
import UserForm from "../components/forms/UserForm.jsx";

export default function Login() {

  return (
    <div>
      <Header/>
      <div>
      <UserForm type ="login"/>
        <div className="flex gap-1 justify-center">
          <h6>Don't have an account?</h6>
          <Link to="/register" className="text-sm text-link-blue hover:underline">Create your account</Link>
        </div>
      </div>
    </div>
  );
}
