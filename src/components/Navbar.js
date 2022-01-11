import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/user/10">User</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar
