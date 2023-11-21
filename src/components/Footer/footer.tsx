import clsx from "clsx";
import lock from "../../assets/footer/lock.svg"
import { useScreenSize } from "../../lib/hooks/screenSize";

export default function Footer() {
    const device = useScreenSize()

    const className = clsx(
        {
            "justify-content-between": device === "desktop",
            "smallText justify-content-center": device === "mobile",
        }
    )

    return (
        <footer className="footer d-flex justify-content-center align-items-center">
            <div className={`w-100 d-flex flex-wrap ${className} align-items-center p-3`} style={{maxWidth: "1200px"}}>
                <div className={className}>Copyright (C) 2023 | clarifionsupport@clarifion.com</div>
                <div className="d-flex justify-content-center align-items-center align-self-center">
                    <img src={lock} alt="lock" />
                    <p className={`m-0 ${className}`}>Secure 256-bit SSL encryption.</p>
                </div>
            </div>
        </footer>
    )
}