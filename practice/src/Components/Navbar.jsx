import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/xyz">counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/expense">expense tracker</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/conditionalRendering">ConditionalRendering</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/api">Api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/abc">Recipe</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/recipe">Viewrecipe</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar