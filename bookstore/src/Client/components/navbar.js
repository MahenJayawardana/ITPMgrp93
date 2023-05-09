import "../css/navbar.css"
import { Link } from "react-router-dom"
import something from "./Waste Wizard Logo.png"


function Navbar(){
    return(
    <>
        
        <div  className="header">
                <div className="wastewizardlogo">
                    <div className="logo_container">
                    <img className="logo" src={something} alt="Logo"/>
                    </div>
                <div className="font-kreon">WASTE WIZARD</div>
            </div>

            <div className="Links_and_button_container">
                <button className="Donate_button_header" >DONATE NOW</button>
                <nav className="nav">

                    <ul className="font-abel">
                        
                        <li>
                            <Link to="/home">HOME</Link>
                        </li>
                        
                        <li>
                            <Link to="/home">JOIN US</Link>
                        </li>

                        <li>
                            <Link to="/home">LET US KNOW</Link>
                        </li>
                        
                        <li>
                            <Link to="/home">SHOP</Link>
                        </li>

                        <li>
                            <Link to="/home">NEWS</Link>
                        </li>
                </ul>
            </nav>
            </div>
        </div>
    </>
    )
}
export default Navbar;