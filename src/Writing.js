import './App.css';
import './Projects.css';
import Navbar from "./Navbar";
import Profile from "./CatherineJang.jpg";
import ContactMe from "./ContactMe";
import {useState} from "react";

function Writing(props) {
    window.scrollTo(0, 0);
    const [story, setStory] = useState("main");

    function handleStoryClick(selectedStory) {
        setStory(selectedStory)
    }

    return (
        <div className="App">
            <Navbar handlePageSelection={props.handlePageSelection}/>
            <header className="App-header">
                {story === "main" &&
                <div className="titlebody">
                    <div className="title">
                        Short Stories
                    </div>
                    <div className="projectarray">
                        <button className="projectbutton" onClick={(e) => handleStoryClick("lipogram")}>Lipogram
                            Introduction
                        </button>
                        <button className="projectbutton" onClick={(e) => handleStoryClick("hisstory")}>His Story
                        </button>
                        <button className="projectbutton" onClick={(e) => handleStoryClick("imposter")}>Imposter
                        </button>
                    </div>
                </div>}

                {story === "lipogram" &&
                <div>
                    Lipogram
                    <iframe src="./Catherine%20Jang_Resume.pdf"></iframe>
                    <button onClick={(e) => handleStoryClick("main")}> Back
                    </button>
                </div>}

                {story === "hisstory" &&
                <div>
                    His Story
                    <iframe src="./Catherine%20Jang_Resume.pdf"></iframe>
                    <button onClick={(e) => handleStoryClick("main")}> Back
                    </button>
                </div>}

                {story === "imposter" &&
                <div>
                    Imposter
                    <iframe src="./Catherine%20Jang_Resume.pdf"></iframe>
                    <button onClick={(e) => handleStoryClick("main")}> Back
                    </button>
                </div>}
            </header>
            <ContactMe/>
        </div>
    );
}

export default Writing;