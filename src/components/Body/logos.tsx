import Logo from "../../assets/body/frame1/Clarifion_Logo.png"
import mcAffe from "../../assets/body/frame1/mcAffe-logo.svg"
import norton from "../../assets/body/frame1/norton-antivirus-logo.svg"

export default function Logos (){
    return(
        <div className="w-100 d-flex justify-content-between" style={{width: "1250px"}}>
            <div className="d-flex" style={{width: "190px"}}>
                <img src={Logo} alt="Clarifon Logo" style={{maxWidth: "100%"}}/>
            </div>
            <div className="d-flex justify-content-between" style={{width: "200px"}}>
                <img src={mcAffe} alt="McAffe Logo" style={{ maxWidth: "50%"}}/>
                <img src={norton} alt="Norton Logo" style={{ maxWidth: "50%"}}/>
            </div>
        </div>
    )
}