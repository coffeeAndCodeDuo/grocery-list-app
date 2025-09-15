import PrivateHeader from "../components/headers/PrivateHeader";
import MainCard from "../components/MainCard";
import ProductTypeCard from "../components/ProductTypeCard";

export default function Products() {
  return (
    <div>
      < PrivateHeader />
      < MainCard 
        topContent={<h4>Products</h4>}
        bgColor="bg-light-blue"
        bottomContent={<div><ProductTypeCard /></div>}
       />
    </div>
  );
}
