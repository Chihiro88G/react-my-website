import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";

function Author() {
    return (
        <>
            <h1 className="author">AUTHOR</h1>

            <div className="text-center p-10 py-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                    Chihiro Hasegawa
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                    Full-Stack Software Developer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                    I help companies develop software/web apps that streamline the internal processes.
                    Connect with me down below and let's chat!
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                    <img src="images/img_me.jpg" className="rounded-full"></img>
                </div>
                <div className="h-20">
                    <a href="https://www.linkedin.com/in/chihiro-h/" target="_blank"><i className='fab fa-linkedin fa-3x mx-3' /></a>
                    <a href="https://github.com/Chihiro88G" target="_blank"><i className='fab fa-github fa-3x mx-3' /></a>
                </div>
            </div>

            {/* <div>
                <p>Hi everyone, I'm Chihiro!</p>
                <ul>
                    <li>Born in Yokohama, Japan</li>
                    <li>Living in Toronto, Canada</li>
                    <li>Likes: playing tennis, cooking, walking around nature</li>
                    <li>Dislikes: eating raw onions</li>
                </ul>

                Although people say I look calm, I like being active and challenging something new!
            </div> */}
        </>
    )
}

export default Author;