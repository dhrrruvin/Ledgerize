import { Link } from "react-router-dom";

// logo
import logo from "../../assets/images/logo/logo.png";
import { Navbar } from "react-bootstrap";

const TopNav = () => {
     return (
          <header>
               <Navbar sticky="top" className="navbar navbar-expand-lg topnav-menu navbar-light">
                    <div className="container">
                         <Link to="/home" className="navbar-brand logo">
                              <img src={logo} height="200" className="align-top logo-dark" alt="" />
                         </Link>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content"
                              aria-controls="topnav-menu-content" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="topnav-menu-content">
                              <ul className="navbar-nav align-items-lg-center ms-auto ">
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/home">Home</Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/home/aboutus">
                                             About Us
                                        </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/home/services">
                                             Services
                                        </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/home/resources">
                                             Resources
                                        </Link>
                                   </li>
                                   <li className="nav-item ms-2">
                                        <Link className="btn btn-outline-secondary btn-sm" to="/home/contactus">Contact Us</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </Navbar>
          </header>
     )
}

export default TopNav