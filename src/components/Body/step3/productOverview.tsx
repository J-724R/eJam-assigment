import { useScreenSize } from "../../../lib/hooks/screenSize";

import thumbnail from "../../../assets/body/main/thumbnail.png";
import stars from "../../../assets/body/main/Stars.svg";
import checkmark from "../../../assets/body/main/tick-circle.svg";
import percentage from "../../../assets/body/main/percentage.svg";
import stock from "../../../assets/body/main/stock.svg";

import './productOverview.scss';

export default function ProductOverview() {
    const device = useScreenSize()

    const ProductOverview = (device === "desktop")
        ? <PODesktop />
        : <POMobile />

    return (
        <div className="d-flex flex-column">
            {ProductOverview}

            <div>
                {product.about.map((element, index) => {
                    return (
                        <div key={index} className="d-flex justify-content-start align-items-center gap-3 my-3">
                            <img src={checkmark} alt="Checkmark bulletpoitn icon" />
                            <p className="m-0">{element}</p>
                        </div>
                    )
                })}
            </div>

            <div className="po_promotion d-flex justify-content-start align-items-center gap-3 my-3 p-3">
                <img src={percentage} alt="percentage Icon" />
                <p className="m-0">Save 53% and get 6 extra Clarifision for only $14 Each.</p>
            </div>
        </div>
    )
}

function PODesktop() {
    return (
        <div className="d-flex column-gap-3">
            <div className="po_thumbnail" >
                <img className="img-fluid" src={product.thumbnail} alt="product thumbnail" />
            </div>
            <div className="d-flex flex-column justify-content-between align-content-between">

                <div className="d-flex flex-column align-items-start column-gap-3 row-gap-1">

                    <div className="d-flex justify-content-between align-items-center w-100" >
                        <p className="m-0 boldText">{product.name}</p>
                        <div className="d-flex column-gap-2 align-items-center"><span className="fadedText crossText">${product.price}</span> <span className="blueBold" style={{ fontSize: "20px" }}>${84}</span></div>
                    </div>

                    <img src={stars} alt="stars" />
                    
                    <div className="d-flex column-gap-3">
                        <img src={stock} alt="blue dot" />
                        <p className="m-0">{product.amount} left in Stock</p>
                    </div>
                    
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

function POMobile() {
    return (
        <div className="d-flex smallText flex-column row-gap-3">
            <div className="d-flex column-gap-3">
                <div className="po_thumbnail" style={{ maxWidth: "80px", maxHeight: "80px" }}>
                    <img className="img-fluid" src={product.thumbnail} alt="product thumbnail" />
                </div>

                <div className="d-flex flex-column align-content-between w-100">
                    <div className="d-flex flex-column align-items-start column-gap-3 row-gap-1">
                        
                        <div className="d-flex justify-content-between align-items-center column-gap-3 w-100">
                            <p className="m-0 boldText">{product.name}</p>
                            <div className="d-flex column-gap-2 align-items-center"><span className="fadedText crossText">${product.price}</span> <span className="blueBold" style={{ fontSize: "20px" }}>${84}</span></div>
                        </div>

                        <img src={stars} alt="stars" />
                        
                        <div className="d-flex column-gap-3">
                            <img src={stock} alt="blue dot" />
                            <p className="m-0">{product.amount} left in Stock</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="d-flex">
                <p>{product.description}</p>
            </div>
        </div>
    )
}

const product = {
    id: 1,
    name: "Clarifion Air Ionizer",
    thumbnail: thumbnail,
    price: 180,
    stars: 5,
    amount: 12,
    description: "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.",
    about: [
        "Negative Ion Technology may help with allergens",
        "Designed for air rejuvenation",
        "Perfect for every room in all types of places."
    ],
}