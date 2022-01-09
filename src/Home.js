import './App.css';
import './Home.css';
import Navbar from "./Navbar";
import ContactMe from "./ContactMe";
import Profile from "./CatherineJang.jpg"
import LinkedIn from "./linkedin.jpg";

function Home(props) {
    function handleLinkClick(mediatype) {
        if (mediatype === "CSTeachingTips") {
            window.open("https://dl.acm.org/doi/10.1145/3408877.3432372");
        } else if (mediatype === "ExtendingSM") {
            window.open("https://dl.acm.org/doi/10.1145/3408877.3432372");
        }
    }

    return (
        <div className="App">
            <Navbar handlePageSelection={props.handlePageSelection}/>
            <div id="introContent">
                <img className="homeProfile" src={Profile}/>
                <p>
                    Hi, I'm Catherine Jang, a software engineer, <br/>
                    mathematician, and music lover.
                </p>
            </div>
            <div id="about">
                <div id="mamtitle">
                    About Me
                </div>
                <div id={"mambody"}>
                    I am CS-Math major at Harvey Mudd College. My interests lie in algorithm ethics and CS education
                    research.
                    Aside from academics, I enjoy writing and playing the cello. Click below to learn more!
                    <br/>
                    <button className="more" onClick={(e) => props.handlePageSelection("about")}> More</button>
                </div>
            </div>
            <div id="research">
                <div id="rbody">
                    Recent Work:
                    <ul>
                        <li>
                            <button className="aresearchlinks" onClick={e => handleLinkClick("CSTeachingTips")}>
                                Motivating Literature and Evaluation of the Teaching Practices Game: Preparing Teaching
                                Assistants to Promote Inclusivity (2021)
                            </button>
                        </li>
                        <li>
                            <button className="iresearchlinks">
                                Extending the Satisficing Model (Coming Soon!)
                            </button>
                        </li>
                    </ul>
                    <br/>
                    <button className="more" onClick={(e) => props.handlePageSelection("research")}> More</button>
                </div>
                <div id="rtitle">
                    Research
                </div>
            </div>

            <div id="writing">
                <div id="wtitle">
                    Writing
                </div>
                <div id="wbody">
                    <button className="hprojectbutton">Lipogram Introduction</button>
                    <button className="hprojectbutton">His Story</button>
                    <br/>
                    <button className="more" onClick={(e) => props.handlePageSelection("writing")}> More</button>
                </div>
            </div>
            <ContactMe/>
        </div>
    );
}

export default Home;