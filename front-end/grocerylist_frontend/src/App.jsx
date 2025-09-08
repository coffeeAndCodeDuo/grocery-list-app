import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";
import AllLists from "./pages/AllLists.jsx";
import Profile from "./pages/UserProfile.jsx";
import SetPassword from "./pages/SetPassword.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastClear from "./components/ToastClear.jsx";
import ListPage from "./pages/ListPage.jsx";

function App() {
  return (
     <>
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/my-lists" element={<AllLists />} />
          <Route path="/my-list/new" element={<ListPage />} />
          <Route path="/my-list/:listId" element={<ListPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forget-password" element={<SetPassword />} />
        </Routes>

        <ToastContainer position="top-center" autoClose={false} />
        <ToastClear />
    </Router>
    </>
  );
}

export default App;

  
