import ProductTypeCardInList from "../productsInList/ProductTypeCardInList";
import ProductsCardInList from "../productsInList/ProductsCardInList";
import {useState } from "react";
import BackArrow from "../../assets/arrow.svg"

export default function AddProductFromList({onClose}) {

    const [productsOpen, setProductsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState(null);

    const handleSelectType = (type) => {
        setSelectedType(type); // Atualiza tipo selecionado
    };

    const handleBack = () => {
        setSelectedType(null); // Volta para lista de tipos
    };

    const handleClose = () => {
        setProductsOpen(false);
        setSelectedType(null);
        if(onClose){
            onClose();
        }
    }

    return (
        <div>
            <div>
                <button onClick={()=> setProductsOpen(true)} className="text-orange-highlight text-sm ml-0.5 cursor-pointer font-semibold flex flex-row items-center gap-3">
                    <h3>+</h3>Add Product
                </button>
                {productsOpen && (
                    <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                )}

                <div
                    className={`fixed left-0 bottom-0 w-full h-2/3 bg-light-blue text-black overflow-y-auto z-50 transform transition-transform duration-300 ${
                        productsOpen ? "translate-y-0" : "translate-y-full"
                    } rounded-t-2xl shadow-lg`}>
                    {!selectedType && (
                            <div>
                                <button onClick={handleClose} className="mt-6 px-8 flex flex-row gap-2"><img src={BackArrow}></img><h5>Back</h5></button>
                                <ProductTypeCardInList onSelectType={handleSelectType} />
                            </div>
                    )}

                    {/* Se selecionou tipo, mostra produtos */}
                    {selectedType && (
                        <>
                            <button onClick={handleBack} className="mt-6 px-8 flex flex-row gap-2">
                            <img src={BackArrow}></img><h5>Back</h5>
                            </button>
                            <ProductsCardInList type={selectedType} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}