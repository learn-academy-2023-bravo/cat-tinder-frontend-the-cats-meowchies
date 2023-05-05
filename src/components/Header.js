import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catPhoto from '../assets/catlogo.jpeg'

const Header = () => {
    return(
        <>
            <div className="header-nav">
                <Nav>
                    <NavItem>
                        <NavLink to="/">
                            <img
                            src={catPhoto}
                            alt="The Cat's Meowchies logo"
                            className="logo"
                            />
                        </NavLink>
                    </NavItem>
                    <h3>The Cat's Meowchies</h3>
                </Nav>
                <Nav className="links">
                    <NavItem>
                        <NavLink to="/catindex">
                            Meet the Cats
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/catnew">
                            Add a New Cat
                        </NavLink>
                    </NavItem> 
                </Nav>
            </div>
            
            
                
            
        </>
    )
}

export default Header