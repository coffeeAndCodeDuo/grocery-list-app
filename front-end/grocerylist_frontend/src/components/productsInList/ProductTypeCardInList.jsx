import { useState, useEffect } from "react";
import { getProductTypes } from "../../services/ProductServices";

export default function ProductTypeCardInList({onSelectType}) {

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
        productTypes.push( <div key={typeList.id} className="bg-white p-4 w-full h-28 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => {onSelectType(typeList.id)}}><h5 className="whitespace-pre-line text-center">{typeList.displayName}</h5>

        </div>);
    });

    return (
        <div>
            <div className="bg-white rounded-lg h-16 flex items-center justify-center mx-16 mt-12 mb-6 p-4 cursor-pointer" onClick={() => {onSelectType("all")}}><h5>All Products</h5></div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-12 px-16">
                {productTypes}
            </div>
        </div>
    )
}    