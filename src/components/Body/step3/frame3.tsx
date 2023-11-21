import clsx from "clsx"

import lock from "../../../assets/body/main/lock1.svg"
import { useScreenSize } from "../../../lib/hooks/screenSize"

import amex from "../../../assets/body/main/PayMethods/amex.svg"
import apple from "../../../assets/body/main/PayMethods/apple_pay.svg"
import gpay from "../../../assets/body/main/PayMethods/gpay.svg"
import masterCard from "../../../assets/body/main/PayMethods/mastercard.svg"
import payPal from "../../../assets/body/main/PayMethods/paypal.svg"
import shop_pay from "../../../assets/body/main/PayMethods/shop_pay.svg"
import visa from "../../../assets/body/main/PayMethods/visa.svg"

import './frame3.scss'

export default function Frame3() {
    const device = useScreenSize()

    return (
        <div className="frame3 d-flex flex-wrap justify-content-center align-items-center my-3">
            {(device === "desktop")
                ?
                <div className="d-flex justify-content-center align-items-center gap-3 p-2">
                    <p className="m-0">Free shipping</p>
                    <div className="f3_lineV" />
                    <div className="d-flex align-items-center column-gap-3">
                        <img src={lock} alt="lock Icon" />
                        <p className="m-0">Secure 256-bit SSL encryption.</p>
                    </div>
                    <div className="f3_lineV" />
                    <PaymentMethod />
                </div>
                :
                <>
                    <div className="d-flex justify-content-center align-items-center gap-3 p-2">
                        <p className="m-0">Free shipping</p>
                        <div className="f3_lineV" />
                        <div className="d-flex align-items-center column-gap-3">
                            <img src={lock} alt="lock Icon" />
                            <p className="m-0">Secure 256-bit SSL encryption.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="f3_lineH" />
                        <PaymentMethod />
                    </div>
                </>
            }


        </div>
    )
}

function PaymentMethod() {
    const className = (useScreenSize() === "mobile") ? "p-2" : "" 

    return (
        <div className={`d-flex justify-content-center align-items-center ${className}`}>
            <img src={amex} alt="payment method" />
            <img src={apple} alt="payment method" />
            <img src={gpay} alt="payment method" />
            <img src={masterCard} alt="payment method" />
            <img src={payPal} alt="payment method" />
            <img src={shop_pay} alt="payment method" />
            <img src={visa} alt="payment method" />
        </div>
    )
}