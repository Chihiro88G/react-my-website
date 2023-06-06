import React, { useState } from 'react'
import './CreateFeedback.css'
import axios from 'axios';

function CreateFeedback({ setOpenModal }) {

    // const dispatch = useDispatch();
    const config = { headers: { "Content-Type": "application/json" } }

    const [newFb, setNewFb] = useState('');
    const [name, setName] = useState('');

    const submitFeedback = async (e) => {
        const myForm = new FormData();
        myForm.set("message", newFb);
        myForm.set("username", name);

        // dispatch();

        try {
            await axios.post(
                `http://localhost:5000/feedback/add`,
                myForm,
                config
            );

            console.log('Feedback Added Successfully')
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div className='modal_background'>
            <div className='modal_container'>
                <div className='title_close_btn'>
                    <button onClick={() => { setOpenModal(false); }}> X </button>
                </div>
                <div className='title'>
                    <h1>Give Feedback to the Author, Chihiro</h1>
                </div>
                <form onSubmit={submitFeedback}>
                    <div className='body'>
                        <div className='name_section'>
                            <input type='text' id='name'
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Your Name' />
                        </div>
                        <div className='message_section'>
                            <textarea placeholder='Enter feedback here'
                                style={{ width: '390px', height: '230px' }}
                                onChange={(e) => setNewFb(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className='footer'>
                        <button id='cancel_btn' onClick={() => { setOpenModal(false); }}>Cancel</button>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateFeedback
