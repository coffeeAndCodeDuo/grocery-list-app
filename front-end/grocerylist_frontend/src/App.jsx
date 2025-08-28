import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";
import GroceryList from "./pages/AllGroceryLists.jsx";
import Profile from "./pages/UserProfile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

    <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default App

  
