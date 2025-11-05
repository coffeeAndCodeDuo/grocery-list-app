import { useState, useEffect } from "react";
import { getAllProducts, getProductsByType } from "../services/ProductServices";
import AddProductButton from "./buttons/AddProductButton";
import DropDownButton from "./buttons/DropDownButton";

export default function ProductsCard({type}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (type === "all") {
                    const allProducts = await getAllProducts();
                    setProducts(allProducts);
                } else {
                    const productsByType = await getProductsByType(type);
                    setProducts(productsByType);
                }
                
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [type]); // depende da URL / type

    const isLocal = window.location.hostname === "localhost";
    const BASE_URL = isLocal
        ? "http://localhost:8081/grocery-list"
        : "https://grocery-list-app-production-361d.up.railway.app";

    const productList = [];
    products.forEach((product) => {
        productList.push( 
            <div key={product.id} className="flex flex-col items-center">
                <div className="relative bg-white  w-full h-14 p-1 rounded-lg flex items-center justify-center">
                   <img src={`${BASE_URL}${product.imageUrl}`} className="max-h-full max-w-full object-contain"/> 
                   <AddProductButton type={"product"} productId={product.id}/>
                </div>
                
                <p className="text-center text-xxs mt-1">{product.name}</p>
            </div>

        );
    });

    return (
        <div>
            <div className="bg-white rounded-lg h-8 flex items-center mx-6 mt-10 mb-6 p-4"><DropDownButton/></div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-12 mt-10 px-6">
                {productList}
            </div>
        </div>
    );
}

