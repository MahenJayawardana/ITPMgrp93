import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./Client/homepage"
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
    
        <p>'header'</p>
     
      </header>
    </div>
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
   {/* <Home/> */}
   </>
  );
}

export default App;
