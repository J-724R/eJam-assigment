import clsx from "clsx"
import ProductOverview from "./productOverview"
import Frame3 from "./frame3"
import Reviews from "./reviews"

import mainImage from "../../../assets/body/main/image4.png"
import guarantee from "../../../assets/body/main/guarantee.png"
import arrow from "../../../assets/body/main/arrrow.svg"

import { useScreenSize } from "../../../lib/hooks/screenSize"

export default function Step3() {
    const device = useScreenSize()

    const reviews = (device === "desktop")
        ? <Reviews />
        : <></>

    const titleClass = clsx(
        "largeText",
        { 
            "text-start": device === "desktop",
            "text-center":  device === "mobile",
        },
    )

    return (
        <div className="w-100 d-flex flex-wrap justify-content-center align-items-start column-gap-5 row-gap-5" >
            <div style={{maxWidth: "550px"}}>
                <img src={mainImage} alt="Product qualities" />
                {reviews}
            </div>
            
            <div className="d-flex flex-column row-gap-3" style={{maxWidth: "550px"}}>
                <div>
                    <h2 className={titleClass}><span className="blueBold"> ONE TIME ONLY </span>special price for 6 extra Clarifion for only <span className="blueBold">$14 each</span>($84.00 total!)</h2>
                </div>

                <ProductOverview/>

                <div className="d-flex flex-column align-items-center">
                    <div>
                       <button className="button p-3 boldText d-flex column-gap-4 align-items-center justify-content-center" type="button"><span>Yes - Claim my discount</span> <img src={arrow} alt="Arrow Icon" /></button>
                        <Frame3 />
                    </div>  
                    <p className="redFont text-underline">No thanks, I don't want this.</p>
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex align-items-center column-gap-3">
                        <img src={guarantee} alt="guarantee icon" />
                        <p className="m-0 greyText">If you are not completely thrilled with your Clarifion - We have a <span className="boldText"> 30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}