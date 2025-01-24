import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const SideNav = () => {
     return (

          <div className="px-0 px-sm-4 d-none d-lg-block" id="sidenav-left">
               <h5>
                    Resources
               </h5>
               <Nav className="flex-column">
                    <Nav.Item>
                         <NavLink to="" className="nav-link">
                              EMI Calculator
                         </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                         <NavLink to="" className="nav-link">
                              SIP Calculator
                         </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                         <NavLink to="" className="nav-link">
                              Super Guaranty Contributions Calculator
                         </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                         <NavLink to="" className="nav-link">
                              Text Withhelds for Individulas Calculator
                         </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                         <NavLink to="" className="nav-link">
                              Goverment Website Link
                         </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                         <NavLink to="" className="nav-link">
                              Act & Law Reference
                         </NavLink>
                    </Nav.Item>
               </Nav>
          </div>
     )
}

export default SideNav