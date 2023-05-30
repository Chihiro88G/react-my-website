import React from "react";
import '../../App.css'

// export default function Author() {
//     return <h1 className="author">AUTHOR</h1>
// }


function Author() {
    return (
        <>
            <h1 className="author">AUTHOR</h1>
            <div className="image_section">
                <img></img>
            </div>
            <div>
                <p>Hi everyone, I'm Chihiro!</p>
                <ul>
                    <li>Born in Yokohama, Japan</li>
                    <li>Living in Toronto, Canada</li>
                    <li>Likes: playing tennis, cooking, walking around nature</li>
                    <li>Dislikes: eating raw onions</li>
                </ul>

                Although people say I look calm, I like being active and challenging something new!
            </div>
        </>
    )
}

export default Author;