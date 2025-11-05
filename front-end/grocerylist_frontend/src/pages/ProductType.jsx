import BackButton from "../components/buttons/BackButton";
import PrivateHeader from "../components/headers/PrivateHeader";
import MainCard from "../components/MainCard";
import ProductsCard from "../components/ProductsCard";
import {useParams} from "react-router-dom";


export default function ProductType() {

    const productTypeLabels = {
        fruits: "Fruits",
        vegetables: "Vegetables",
        meat: "Meat",
        fish: "Fish",
        bakery: "Bakery",
        charcuterie: "Charcuterie",
        dairy: "Dairy",
        pantryitems: "Pantry Items",
        drinks: "Drinks",
        alcoholicdrinks: "Alcoholic Drinks",
        homecleaning: "Home Cleaning",
        healthbeauty: "Health & Beauty",
    };

    const {productType} = useParams();

    const displayType = productTypeLabels[productType] || "Products";

    return (
        <div>   
            <BackButton type="backOne" />
            <PrivateHeader />
            <MainCard 
                topContent={<h4>{displayType}</h4>}
                bottomContent={<div><ProductsCard type={productType}/></div>}
                bgColor="bg-light-blue"
            />
        </div>
    );
}
