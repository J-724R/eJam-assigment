import Logos from "./logos"
import ProgressBar from "./step3/progressBar"
import Step3 from "./step3/main"


export default function Body(){    
    return (
        <main className="d-flex justify-content-center">
            <div className="w-100 px-3 py-4 d-flex flex-column justify-content-center align-items-center row-gap-4" style={{maxWidth: "1200px"}}>
                <Logos />
                <div className="text-center">
                    <h1>Wait ! your order in progress.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <ProgressBar/>
                <Step3/>
            </div>
        </main>
    )
}
