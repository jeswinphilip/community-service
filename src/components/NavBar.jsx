import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="icon">🏠</span>
        <span className="label">Home</span>
      </NavLink>

      <NavLink
        to="/buses"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="icon">🚌</span>
        <span className="label">Buses</span>
      </NavLink>

      <NavLink
        to="/donors"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="icon">❤️</span>
        <span className="label">Donors</span>
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="icon">✍️</span>
        <span className="label">Register</span>
      </NavLink>
    </nav>
  )
}

export default NavBar
