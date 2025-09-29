import { useState, useEffect } from "react";
import { getAllProducts, getProductsByType } from "../../services/ProductServices";
import AddProductButton from "../buttons/AddProductButton";

export default function ProductsCardInList({type}) {
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
                <div className="relative bg-white  w-full h-14 p-1 rounded-lg flex items-center justify-center">
                   <img src={`http://localhost:8081/grocery-list${product.imageUrl}`} className="max-h-full max-w-full object-contain"/> 
                   <AddProductButton type={"list"} productId={product.id}/>
                </div>
            
                <h6 className="text-center mt-1">{product.name}</h6>
            </div>

        );
    });

    return (
        <div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-12 mt-10 px-12">
                {productList}
            </div>
        </div>
    );
}