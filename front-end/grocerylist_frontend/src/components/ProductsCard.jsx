import { useState, useEffect } from "react";
import { getAllProducts, getProductsByType } from "../services/ProductServices";
import AddProductButton from "./buttons/AddProductButton";

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
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, [type]); // depende da URL / type

    const productList = [];
    products.forEach((product) => {
        productList.push(
            <div key={product.id} className="flex flex-col items-center">
                <div className="relative bg-white p-4 w-full h-14 rounded-lg flex items-center justify-center cursor-pointer"><AddProductButton/> 
                   <img src={`${window.location.origin}/grocery-list${product.imageUrl}`}></img> 
                </div>
                <p className="text-center text-xxs mt-1">{product.name}</p>
            </div>
        );
    });

    return (
        <div>
            <div className="bg-white rounded-lg h-8 flex items-center justify-center mx-6 mt-10 mb-6 p-4 cursor-pointer"></div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-12 mt-10 px-6">
                {productList}
            </div>
        </div>
    );
}

