import { useState, useEffect } from "react";
import { getProductsByType, getProductTypes, getAllProducts } from "../services/ProductServices";
import { useNavigate } from "react-router-dom";

export default function ProductTypeCard() {

    const navigate = useNavigate();

    const [productType, setProductType] = useState([]);
    useEffect(() => { 
        const fetchProducts = async () => {
            const typeList = await getProductTypes();
            setProductType(typeList);
        };
        fetchProducts();
    }, []);

    const productTypes = [];
    productType.forEach((typeList) => {
        productTypes.push( <div key={typeList.id} className="bg-white p-4 w-full h-28 rounded-lg flex items-center justify-center cursor-pointer" onClick={() =>navigate("/products/"+ typeList.id)}><h6 className="whitespace-pre-line text-center">{typeList.displayName}</h6>

        </div>);
    });

    return (
        <div>
            <div className="bg-white rounded-lg h-16 flex items-center justify-center mx-6 mt-12 mb-6 p-4 cursor-pointer" onClick={() => {navigate ("/products/all");}}><h6>All Products</h6></div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-12 px-6">
                {productTypes}
            </div>


        </div>
    )
}    