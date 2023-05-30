import React, { useEffect, useState } from "react";
import '../../App.css'
import CreateFeedback from "../modals/CreateFeedback";

export default function Feedback({ feedbackData }) {

    const [fb, setFb] = useState();
    const [openModal, setOpenModal] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/feedback", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "feedbackData")
                setFb(data)
            });
    }, [])

    return (
        <>
            <h1 className="feedback">FEEDBACK</h1>
            <div>
                {openModal ?
                    <CreateFeedback setOpenModal={setOpenModal} />
                    :
                    <div>
                        <div className="create_fb_container">
                            <button className="create_fb_btn"
                                onClick={() => { setOpenModal(true); }}>Create Feedback</button>
                            {/* {openModal && <CreateFeedback setOpenModal={setOpenModal} />} */}
                        </div>
                        <div className="fb_container">
                            <div className="fb_wrapper">
                                {fb && fb.map((i) => {
                                    return (
                                        <>
                                            <div className="fb_items">
                                                <div className="fb_item">
                                                    <p className="fb_name">{i.username}</p>
                                                    <p className="fb_message">{i.message}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}