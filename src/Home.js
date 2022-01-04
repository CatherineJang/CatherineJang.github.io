import './App.css';
import './Home.css';
import Navbar from "./Navbar";
import ContactMe from "./ContactMe";
import Profile from "./CatherineJang.jpg"

function Home(props) {
    return (
        <div className="App">
            <Navbar handlePageSelection= {props.handlePageSelection}/>
            <div id="introContent">
                <img className="homeProfile" src={Profile}/>
                <p>
                    Hi, I'm Catherine Jang, a software engineer, <br/>
                    mathematician, and music lover.
                </p>
            </div>
            <div id={"about"}>
                <div className={"title"}>
                    More About Me
                </div>
                <div className={"body"}>
                    I am CS-Math major at Harvey Mudd College. My interests lie in algorithm ethics and CS education research.
                    Aside from academics, I enjoy writing and playing the cello. Click below to learn more!
                </div>
                <div>
                    <button className="more"> More </button>
                </div>
            </div>
            <div id={"research"}>
                <div className="title">
                    Research
                </div>
                <div className="body">
                    Recent Work:

                </div>
                <div>
                    <button className="more"> More </button>
                </div>
            </div>
            <div id={"writing"}>
                <div className="title">
                    Writing
                </div>
                <div className="body">
                    <button className="projectbutton">Lipogram Introduction</button>
                    <button className="projectbutton">Lipogram Introduction</button>
                </div>
                <div>
                    <button className="more"> More </button>
                </div>
            </div>
            <ContactMe/>
        </div>
    );
}

export default Home;