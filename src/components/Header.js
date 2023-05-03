import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <>
            
            <Nav className="header-nav">
                <NavItem>
                    <NavLink to="/">
                        <img
                        src="/assets/catlogo.jpeg"
                        alt="The Cat's Meowchies logo"
                        className="logo"
                        />
                    </NavLink>
                    <h3>The Cat's Meowchies</h3>
                </NavItem>
            </Nav>

            <NavItem>
                <NavLink to="/catindex" className="nav-link">
                    Meet the Cats
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink to="/catnew" className="nav-link">
                    Add a New Cat
                </NavLink>
            </NavItem>
        </>
    )
}

export default Header