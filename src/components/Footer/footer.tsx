import lock from "../../assets/footer/lock.svg"

export default function Footer() {
    return (
        <footer className="footer d-flex justify-content-center align-items-center">
            <div className="w-100 d-flex flex-wrap justify-content-center align-items-center p-3" style={{maxWidth: "1200px"}}>
                <div className="me-auto">Copyright (C) 2023 | clarifionsupport@clarifion.com</div>
                <div className="d-flex justify-content-center align-items-center align-self-center">
                    <img src={lock} alt="lock" />
                    <p className="m-0">Secure 256-bit SSL encryption.</p>
                </div>
            </div>
        </footer>
    )
}