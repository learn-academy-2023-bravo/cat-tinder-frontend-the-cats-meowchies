import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catPhoto from '../assets/catlogo.jpeg'
const Header = () => {
    return(
        <>
            <Nav className="header-nav">
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
            
            <Nav className="nav-link">
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
        </>
    )
}

export default Header