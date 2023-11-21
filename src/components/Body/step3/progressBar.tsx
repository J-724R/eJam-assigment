import clsx from "clsx"
import { useScreenSize } from "../../../lib/hooks/screenSize"

import checkmark from "../../../assets/body/frame2/tick-circle.svg"
import './progressBar.scss'

export default function ProgressBar() {
    const device = useScreenSize()
    const getParams = 3

    return (
        <div className="w-100 d-flex justify-content-between align-items-center">
            {elements.map((element, i) => {
                //@ts-ignore
                const text = element.text[device]
                const boldtext = (i === (getParams - 1)) ? "boldText" : ""

                return (
                    <div className="d-flex flex-wrap justify-content-center align-items-center column-gap-3" key={i}>
                        <Steps 
                            position={getParams}
                            index={i+1}
                            device={device}
                        />
                        <p className={"m-0 "+boldtext}>{text}</p>
                    </div>
                )
            })}
        </div>
    )
}

function Steps({position, index, device}:{position:number, index:number, device: string}){
    const className = clsx(
        "progress_circle",
        {
            "progress_green": position > index,
            "progress_blue": position === index,
            "progress_white": position < index,
        },
        {
            "progress_desktop": device === "desktop",
            "progress_mobile": device === "mobile",
        },
    ) 
    
    const content = (position > index) ? <img className="" src={checkmark} alt="checkmark" /> : index

    return(
        <div className={className}>{content}</div>
    )
}

const elements = [
    { text: {desktop: "Step 1 : Cart Review", mobile: "Cart Review"}},
    { text: {desktop: "Step 2 : Checkout", mobile: "Checkout"} },
    { text: {desktop: "Step 3 : Special Offer", mobile: "Special Offer" } },
    { text: {desktop: "Step 4 : Confirmation", mobile: "Confirmation" }},
]