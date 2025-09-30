import BackButton from "../components/buttons/BackButton";
import PrivateHeader from "../components/headers/PrivateHeader";
import MainCard from "../components/MainCard";
import ProductsCard from "../components/ProductsCard";

export default function AllProducts() {
    return (
        <div>
            <BackButton type="backOne" />
            <PrivateHeader />
            <MainCard 
                topContent={<h4>All Products</h4>}
                bottomContent={<div><ProductsCard type="all" /></div>}
                bgColor="bg-light-blue"
            />
        </div>
    );
}
