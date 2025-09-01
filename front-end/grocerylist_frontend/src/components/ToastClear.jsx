import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ToastClear() {
    const location = useLocation();
    useEffect (() => {
        toast.dismiss();
    }, [location]); 
    return null;
}