import './ContactMe.css';
import LinkedIn from "./linkedin.jpg";
import Github from "./github.jpg";
import Facebook from "./facebook.jpg";

import {useState} from "react";

function ContactMe() {
    function handleLinkClick(mediatype) {
        if (mediatype === "LinkedIn") {
            window.open("https://www.linkedin.com/in/catherine-jang-08420170");
        } else if (mediatype === "Github") {
            window.open("https://www.github.com/CatherineJang")
        } else if (mediatype === "Facebook") {
            window.open("https://www.facebook.com/catherine.jang.731");
        }
    }

    return (
        <div className="contactmepage">
            <div className="ctitle">
                Contact Me
            </div>
            <div className="cbody">
                Email: catherinehjang@gmail.com
            </div>
            <br/>
            <div>
                <div className="ctitle">
                    Social Media
                </div>
                <div>
                    <button className="socialmediabutton" onClick={e => handleLinkClick("LinkedIn")}>
                        <img src={LinkedIn} className="smlogo"/>
                    </button>
                    <button className="socialmediabutton" onClick={e => handleLinkClick("Github")}>
                        <img src={Github} className="smlogo"/>
                    </button>
                    <button className="socialmediabutton" onClick={e => handleLinkClick("Facebook")}>
                        <img src={Facebook} className="smlogo"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;