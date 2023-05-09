import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./Client/homepage"
import Navbar from "./Client/components/navbar"
function App() {
  return (
    <>
    <div className="App">
      <header className="navcss">
    
        
        <Navbar/>
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
