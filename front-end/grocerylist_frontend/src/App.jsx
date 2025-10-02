import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";
import AllLists from "./pages/AllLists.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastClear from "./components/ToastClear.jsx";
import ListPage from "./pages/ListPage.jsx";
import ProductType from "./pages/ProductType.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx"; 

function App() {
  return (
     <>
    <Router>
        <Routes>
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="/products/all" element={<PrivateRoute><AllProducts /></PrivateRoute>} />
          <Route path="/products/:productType" element={<PrivateRoute><ProductType /></PrivateRoute>} />
          <Route path="/my-lists" element={<PrivateRoute><AllLists /></PrivateRoute>} />
          <Route path="/my-list/new" element={<PrivateRoute><ListPage /></PrivateRoute>} />
          <Route path="/my-list/:listId" element={<PrivateRoute><ListPage /></PrivateRoute>} />
        </Routes>

        <ToastContainer position="top-center" autoClose={false} />
        <ToastClear />
    </Router>
    </>
  );
}

export default App;

  
