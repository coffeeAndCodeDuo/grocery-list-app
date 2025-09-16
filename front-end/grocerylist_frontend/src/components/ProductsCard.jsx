import { getAllProducts } from "../services/ProductServices";



export default async function ProductsCard({type}) {

     

    if (type === "all") {

        
        const allProducts = await getAllProducts();

        return (
            <div>
                <div className="bg-white rounded-lg h-8 flex items-center justify-center mx-6 mt-10 mb-6 p-4 cursor-pointer"></div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-6 mb-12 px-6">
                    <div></div>

                    <div></div>

                </div>

            </div>
    );
            
}


    return (
        <div>
            <div className="bg-white rounded-lg h-8 flex items-center justify-center mx-6 mt-10 mb-6 p-4 cursor-pointer"></div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-6 mb-12 px-6">
                <div></div>

                <div></div>


            </div>




        </div>
    );
}