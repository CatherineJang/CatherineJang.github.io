import './App.css';
import './About.css';
import Navbar from "./Navbar";
import Profile from "./CatherineJang.jpg";
import ContactMe from "./ContactMe";

function About(props) {
    window.scrollTo(0, 0);
    return (
        <div className="App">
            <Navbar handlePageSelection={props.handlePageSelection}/>
            <header className="App-header">
                <div className="aboutcontent">
                    <img className="aboutimg" src={Profile}></img>
                    <div className="abouttxt">
                        Catherine Jang is a senior CS-Math joint major with a concentration in music at Harvey Mudd
                        College. Throughout her time at Harvey Mudd, she has been a co-president of the Harvey Mudd
                        chapter of KSEA (Korean American
                        Scientists and Engineers Association) as well as co-head sponsor of APISPAM (Asian Pacific
                        Islander Sponsor Program at Mudd). Currently, she is a sponsor for APISPAM and a Case Residence
                        Hall
                        dorm president. She is interested in software development, CS education, and
                        algorithm bias and ethics. She hopes to pursue a career in academia or industry research.
                        In her free time, she enjoys writing and playing the cello.
                    </div>
                </div>
            </header>
            <ContactMe/>
        </div>
    );
}

export default About;