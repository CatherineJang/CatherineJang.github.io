import './App.css';
import {useState} from "react";

// import all pages
import Home from "./Home";
import About from './About';
import Research from "./Research";
import Writing from "./Writing";

function App() {
    const [page,setPage] = useState("home");
  return (
    <div className="App">
      <header className="App-header">
          {(page === "home") && <Home handlePageSelection= {setPage}/>}
          {(page === "about") && <About handlePageSelection= {setPage}/>}
          {(page === "research") && <Research handlePageSelection= {setPage}/>}
          {(page === "writing") && <Writing handlePageSelection= {setPage}/>}
      </header>
    </div>
  );
}

export default App;
