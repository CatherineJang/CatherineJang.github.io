import './App.css';
import './Navbar.css';
import Pdf from './Catherine Jang_Resume.pdf';

function Navbar(props) {
    return (
        <div className="navbar">
            <button className="namebutton" onClick={(e)=> props.handlePageSelection("home")}>Catherine Jang</button>
            <button className="navbutton" onClick={(e)=> props.handlePageSelection("home")}>HOME</button>
            <button className="navbutton" onClick={(e)=> props.handlePageSelection("about")}>ABOUT</button>
            <button className="navbutton" onClick={(e)=> props.handlePageSelection("research")}>RESEARCH</button>
            <button className="navbutton" onClick={(e)=> props.handlePageSelection("writing")}>WRITING</button>
            <a target="_blank" rel="noopener noreferrer" href={Pdf}><button className="navbutton">RESUME</button></a>
        </div>
    );
}

export default Navbar;