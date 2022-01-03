import './App.css';
import './Projects.css';
import Navbar from "./Navbar";
import Profile from "./CatherineJang.jpg";

function Writing(props) {
    return (
        <div className="App">
            <Navbar handlePageSelection= {props.handlePageSelection}/>
            <header className="App-header">
                <div className="projectarray">
                    <div>
                        <h3>Short Stories</h3>
                        <button className="projectbutton"><img className="image" src={Profile}></img></button>
                        <button className="projectbutton"><img className="image" src={Profile}></img></button>
                        <button className="projectbutton"><img className="image" src={Profile}></img></button>
                        <button className="projectbutton"><img className="image" src={Profile}></img></button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Writing;