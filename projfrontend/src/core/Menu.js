import React, { Fragment } from "react";
import { Link,useNavigate} from "react-router-dom";
import "../styles/menu.css";
import { isAuthenticated,signout } from "../auth/helper";
import logo from '../logo.png'

 

const Menu = () => { 
    
    const navigate= useNavigate();
    return (
        
        <div className="container-menu"> <img src={logo} className="logo-img" alt=""/>  <div> <header>
        {/* <div className="logo">
            <img src="logo" alt=""/>
    
        </div> */}
        
        <nav>
            <ul className="nav-header">
               
                <li className="li-items" ><Link to="/" className="nav-links">Home</Link> </li>
                
                <li className="li-items"><Link to="/" className="nav-links">About Us</Link></li>

                <li className="li-items"><Link to="/user/events" className="nav-links">Events</Link></li>
                <li className="li-items"><Link to="/" className="nav-links">Organise an event</Link></li>
                <li className="li-items"><Link to="/" className="nav-links">Alumini Section</Link></li>
                <li className="li-items"><Link to="/user/faq" className="nav-links">FAQ</Link></li>
                
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="li-items"> <Link className="nav-links" to="/signup">Signup</Link> </li>

                        <li className="li-items"> <Link className="nav-links" to="/signin">SignIn</Link> </li>
                    </Fragment>
                )}

                {
                    isAuthenticated() && (
                        
                          <Fragment><li className="li-items"> <span onClick={()=>{
                       signout(()=>{
                        navigate("/")
                       })
                    }}>Signout</span> </li></Fragment>

                        
                   
                    )
                }
                
                    
                
                    
              

            
                    
            

            </ul>
        </nav>
    </header>
    </div></div>
       
    )
}

export default Menu