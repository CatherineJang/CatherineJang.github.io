import './ContactMe.css';
import {useState} from "react";

function ContactMe() {
    function handleLinkClick(mediatype){
        if (mediatype === "LinkedIn"){
            window.open("https://www.linkedin.com/in/catherine-jang-08420170");
        }
        else if (mediatype === "Github"){
            window.open("https://www.github.com/CatherineJang")
        }
        else if (mediatype === "Facebook"){
            window.open("https://www.facebook.com/catherine.jang.731");
        }
    }

    return (
        <div className="contactmepage">
            <div className="title">
            Contact Me
            </div>
            <div className="body">
                Email: catherinehjang@gmail.com
            </div>
            <div>
                <div className="title">
                    Social Media
                </div>
                <div>
                    <button className="socialmediabutton" onClick={e => handleLinkClick("LinkedIn")}>
                        LinkedIn
                    </button>
                    <button className="socialmediabutton" onClick={e => handleLinkClick("Github")}>
                        Github
                    </button>
                    <button className="socialmediabutton" onClick={e => handleLinkClick("Facebook")}>
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;