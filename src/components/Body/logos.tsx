import Logo from "../../assets/body/frame1/Clarifion_Logo.png"
import mcAffe from "../../assets/body/frame1/mcAffe-logo.svg"
import norton from "../../assets/body/frame1/norton-antivirus-logo.svg"

export default function Logos (){
    return(
        <div className="w-100 d-flex justify-content-between column-gap-3">
            <div className="flex-{grow|shrink}-1">
                <img className="img-fluid flex-{grow|shrink}-1" src={Logo} alt="Clarifon Logo" />
            </div>
            <div className="d-flex gap-3 flex-{grow|shrink}-1">
                <img className="img-fluid" src={mcAffe} alt="McAffe Logo" />
                <img className="img-fluid" src={norton} alt="Norton Logo" />
            </div>
        </div>
    )
}