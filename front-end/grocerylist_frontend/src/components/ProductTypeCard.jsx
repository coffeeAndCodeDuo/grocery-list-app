import { useState, useEffect } from "react";
import { getProductsByType, getProductTypes } from "../services/ProductServices";


export default function ProductTypeCard() {

    const [productType, setProductType] = useState([]);
    useEffect(() => { 
        const fetchProducts = async () => {
            const data = await getProductTypes();
            setProductType(data);
        };
        fetchProducts();
    }, []);



    return (
        <div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-12 px-6">
                <div className="bg-white p-4 w-full aspect-square rounded-lg"></div>
                <div className="bg-white p-4 w-full aspect-square rounded-lg"></div>
                <div className="bg-white p-4 w-full aspect-square rounded-lg"></div>
        
        
            </div>


        </div>
    )
}    