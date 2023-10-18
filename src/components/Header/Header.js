import { useContext } from "react";
import { NavLink, } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../context/language";
import { ThemeContext } from "../../context/theme";
import "./Header.css"

export default function Header() {
  const CounterVal = useSelector(state => state.CartProducts.counter_val)
  const { contextLang, setContextLang } = useContext(LanguageContext)
  const { contextTheme, setcontextTheme } = useContext(ThemeContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink
          to="/"
          className="navbar-brand">
          Products App
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">

            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
              </span>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={()=>setContextLang('en')}>En</button></li>
                <li><button className="dropdown-item" onClick={()=>setContextLang('ar')}>Ar</button></li>
              </ul>
            </div>

            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Theme
              </span>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={()=>setcontextTheme('light')}>Light</button></li>
                <li><button className="dropdown-item" onClick={()=>setcontextTheme('dark')}>Dark</button></li>
              </ul>
            </div>

            <NavLink
              to="/register"
              className={({ isActive, isPending }) => {
                return isActive ? "active nav-link" : isPending ? "pending nav-link" : "nav-link";
              }}>
              Register
            </NavLink>

            <NavLink
              to="/log-in"
              className={({ isActive, isPending }) => {
                return isActive ? "active nav-link" : isPending ? "pending nav-link" : "nav-link";
              }}>
              Log In
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) => {
                return isActive ? "active nav-link" : isPending ? "pending nav-link" : "nav-link";
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <sup className="badge text-secondary">{CounterVal}</sup>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}