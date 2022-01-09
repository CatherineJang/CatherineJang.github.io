import './App.css';
import './Projects.css';
import Navbar from "./Navbar";
import Profile from "./CatherineJang.jpg";
import ContactMe from "./ContactMe";
import NLP from "./NLP_Project__Detecting_East_Asian_Prejudice_on_Social_Media.pdf";
import Pdf from "./Catherine Jang_Resume.pdf";

function Research(props) {
    function handleLinkClick(mediatype) {
        if (mediatype === "CSTeachingTips") {
            window.open("https://dl.acm.org/doi/10.1145/3408877.3432372");
        } else if (mediatype === "ExtendingSM") {
            window.open("https://dl.acm.org/doi/10.1145/3408877.3432372");
        } else if (mediatype === "NLP") {
            window.open({NLP});
        }
    }

    window.scrollTo(0, 0);
    return (
        <div className="App">
            <Navbar handlePageSelection={props.handlePageSelection}/>
            <header className="App-header">
                <div className="titlebody">
                    <div className="title">
                        CS Projects
                    </div>
                    <div className="projectarray">
                        <ul>
                            <li>
                                <button className="aresearchlinks" onClick={e => handleLinkClick("CSTeachingTips")}>
                                    Motivating Literature and Evaluation of the Teaching Practices Game: Preparing
                                    Teaching
                                    Assistants to Promote Inclusivity (2021)
                                </button>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href={NLP}>
                                    <button className="aresearchlinks">Detecting East Asian Prejudice (written for
                                        classwork purposes)
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        Math Projects
                    </div>
                    <ul>
                        <li>
                            <button className="iresearchlinks">
                                Extending the Satisficing Model (Coming Soon!)
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
            <ContactMe/>
        </div>
    );
}

export default Research;