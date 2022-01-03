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
                    mathematician, and researcher.
                </p>
            </div>
            <div id={"about"}>
                <div>
                    More About Me
                </div>
                <div>
                    <button> More </button>
                </div>
            </div>
            <div id={"research"}>
                <div>
                    Research
                </div>
                <div>
                    <button> More </button>
                </div>
            </div>
            <div id={"writing"}>
                <div>
                    Writing
                </div>
                <div>
                    <button> More </button>
                </div>
            </div>
            <ContactMe/>
        </div>
    );
}

export default Home;