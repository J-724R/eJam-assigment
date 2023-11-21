import Logo from "../../assets/body/frame1/Clarifion_Logo.png"
import mcAffe from "../../assets/body/frame1/mcAffe-logo.svg"
import norton from "../../assets/body/frame1/norton-antivirus-logo.svg"

export default function Logos (){
    return(
        <div className="w-100 d-flex justify-content-between">
            <div className="d-flex">
                <img className="img-fluid" src={Logo} alt="Clarifon Logo" />
            </div>
            <div className="d-flex justify-content-between">
                <img className="img-fluid" src={mcAffe} alt="McAffe Logo" />
                <img className="img-fluid" src={norton} alt="Norton Logo" />
            </div>
        </div>
    )
}