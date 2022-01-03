import './App.css';
import './About.css';
import Navbar from "./Navbar";
import Profile from "./CatherineJang.jpg";

function About(props) {
    return (
        <div className="App">
            <Navbar handlePageSelection= {props.handlePageSelection}/>
            <header className="App-header">
                <div className="aboutcontent">
                    <img className="aboutimg" src={Profile} ></img>
                    <div className="abouttxt">
                        Catherine Jang is a senior CS-Math joint major at Harvey Mudd College. She has been a co-president
                        of the Harvey Mudd chapter of KSEA (Korean American Scientists and Engineers Association) as well
                        as co-head sponsor of APISPAM (Asian Pacific Islander Sponsor Program at Mudd). She is interested
                        in software development, CS education, and algorithm bias and ethics. In her free time, she enjoys
                        writing and playing the cello.
                    </div>
                </div>
            </header>
        </div>
    );
}

export default About;