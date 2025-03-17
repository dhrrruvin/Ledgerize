import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const TopNav = () => {
     return (
          <header>
               <Navbar expand="lg" sticky="top" className="navbar-expand-lg navbar-light">
                    <Link to="/home" className="navbar-brand logo">
                         <img src={logo} height={100} width="auto" className="align-top logo-dark" alt="AccLedgerize" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto">
                              <Nav.Item>
                                   <Link className="nav-link" to="/home">Home</Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Link className="nav-link" to="/home/aboutus">About Us</Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Link className="nav-link" to="/home/services">Services</Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Link className="nav-link" to="/home/softwareSpecialization">Software Specialization</Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Link className="nav-link" to="/home/resources">Resources</Link>
                              </Nav.Item>
                              {/* <Nav.Item>
                                   <Link className="nav-link" to="/home/blog">Blog</Link>
                              </Nav.Item> */}
                              <Nav.Item>
                                   <Link className="btn btn-outline-secondary btn-sm" to="/home/contactus">Contact Us</Link>
                              </Nav.Item>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
          </header>
     )
}

export default TopNav