import Header from "../components/Header.jsx";
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../components/auth/UserForm.jsx";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <UserForm type ="login"/>

      <h5>Don't have an account?</h5><Link to="/register">Create your account</Link>

    </div>
  );
}
