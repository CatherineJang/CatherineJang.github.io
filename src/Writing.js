import './App.css';
import './Projects.css';
import Navbar from "./Navbar";
import Profile from "./CatherineJang.jpg";
import ContactMe from "./ContactMe";

function Writing(props) {
    return (
        <div className="App">
            <Navbar handlePageSelection= {props.handlePageSelection}/>
            <header className="App-header">
                <div className="projectarray">
                    <h4>Short Stories</h4>
                    <div>
                        <button className="projectbutton">Lipogram Introduction</button>
                        <button className="projectbutton">His Story</button>
                        <button className="projectbutton">Imposter</button>
                    </div>
                </div>
            </header>
            <ContactMe/>
        </div>
    );
}

export default Writing;