import profilePicture from "../../../assets/body/main/ProfilePicture.png"
import stars from "../../../assets/body/main/Stars.svg"
import verify from "../../../assets/body/main/verify.png"

export default function Reviews() {
    return (
        <div>
            {reviews.map((review,) => {
                return (
                    <div key={review.id} className="p-4">
                        <div className="d-flex column-gap-3">
                            <img src={review.profilePicture} alt="Profile Picture" style={{width: "48px", height: "48px"}}/>
                            <div>
                                <img src={stars} alt="stars"/>
                                <div className="d-flex align-items-center column-gap-3">
                                    <p className="m-0">{review.name}</p>
                                    {(review.verified) ? <img src={verify} alt="verified user" /> : null}
                                </div>
                            </div>
                        </div>
                        <div>
                            {review.review.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const reviews = [
    {
        id: 1,
        name: "Ken T.",
        profilePicture: profilePicture,
        verified: true,
        review: { value: 5, text: "“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”", }
    }
]