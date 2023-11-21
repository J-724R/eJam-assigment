import { useScreenSize } from "../../lib/hooks/screenSize"
import { useState } from "react"

import icon1 from "../../assets/header/fluent_checkmark-starburst-20-regular.svg"
import icon2 from "../../assets/header/ph_truck-light.svg"
import icon3 from "../../assets/header/mdi_cards-heart-outline.svg"
import icon4 from "../../assets/header/fluent_arrow-sync-checkmark-20-regular.svg"
import arrowL from "../../assets/header/arrow_L.svg"
import arrowR from "../../assets/header/arrow_R.svg"


const content = [
    { icon: icon1, text: "30-DAY SATISFACTION GUARANTEE" },
    { icon: icon2, text: "Free delivery on orders over $40.00" },
    { icon: icon3, text: "50.000+ HAPPY CUSTOMERS" },
    { icon: icon4, text: "100% Money Back Guarantee" },
]

export default function Highlights() {
    const device = useScreenSize()

    return (
        <header className="header d-flex justify-content-center align-items-center">
            <div className="w-100 d-flex justify-content-between p-3" style={{maxWidth: "1200px"}}>
                {
                    (device === "desktop")
                        ? <Highlights_Desktop />
                        : <Highlights_Mobile />
                }
            </div>
        </header>
    )
}

function Highlights_Desktop() {
    return (
        <>
            {content.map((content, index) => {
                return (
                    <Element Icon={content.icon} text={content.text} key={index} />
                )
            })}
        </>
    )
}

function Highlights_Mobile() {
    const [index, setIndex] = useState(0)

    function carrousel(value: number) {
        console.log(index)

        if (value == -1 && index == 0) {
            setIndex(3)
        }
        else if (value == 1 && index == 3) {
            setIndex(0)
        }
        else {
            setIndex(index + value)
        }
    }

    return (
        <>
            <div className="center_content" onClick={() => { carrousel(-1) }} style={{cursor: "pointer", width: "35px"}}>
                <img src={arrowL} alt="left arrow button" />
            </div>

            <Element Icon={content[index].icon} text={content[index].text} />
                
            <div className="center_content" onClick={() => { carrousel(1) }} style={{cursor: "pointer", width: "35px"}}>
                <img src={arrowR} alt="right arrow button" />
            </div>
        </>
    )
}

const Element = (props: { Icon: string, text: string, index?: number }) => {
    const { Icon, text, index } = props

    const key = (index) ? index : 0
    const device = useScreenSize()

    const smalltext = (device === "mobile") ? "smallText" : "";

    return (
        <div key={key} className="d-flex align-items-center column-gap-3">
            <img src={Icon} alt="Icon" />
            <p className={`m-0 ${smalltext}`}>{text}</p>
        </div>
    )
}