import "../css/navbar.css";
import { Link } from "react-router-dom";
import something from "./Waste Wizard Logo.png";
import * as IoIcons5 from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="wastewizardlogo">
          <div className="logo_container">
            <Link to="/Home">
              <img className="logo" src={something} alt="Logo" />
            </Link>
          </div>
          <div className="Wastewizardandlogins">
            <div className="font-kreon">
              <Link className="font-kreon" to="/Home">WASTE WIZARD</Link>
            </div>
            <div className="LoginRegister">
              <Link to="/Login" className="HeaderLogin">
                Log In
              </Link>
              <Link to="/Register" className="HeaderRegister">
                Register
              </Link>
            </div>
          </div>
        </div>

        <div className="Links_and_button_container">
          <div className="cartanddonate">
            <Link to="/ShoppingCart" className="cartbuttonheader">
              <IoIcons5.IoCartOutline />
            </Link>
            <button className="Donate_button_header">
              DONATE NOW
              <div className="donatebuttonicon">
                <IoIcons5.IoHeartCircle />
              </div>
            </button>
          </div>
          <nav className="nav">
            <ul className="font-abel">
              <li>
                <Link to="/Home">HOME</Link>
              </li>
              <li>
                <Link to="/home">JOIN US</Link>
              </li>
              <li>
                <Link to="/home">LET US KNOW</Link>
              </li>
              <li>
                <Link to="/Shop">SHOP</Link>
              </li>
              <li>
                <Link to="/home">NEWS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
