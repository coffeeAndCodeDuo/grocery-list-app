import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";
import GroceryList from "./pages/AllGroceryLists.jsx";
import Profile from "./pages/UserProfile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastClear from "./components/ToastClear.jsx";
import Layout from "./components/Layout.jsx";

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

        <ToastContainer position="bottom-center" autoClose={false} />
        <ToastClear />
    </Router>
    </>
  );
}

export default App

  
