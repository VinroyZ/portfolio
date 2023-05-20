import './navbar.css';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../homepage/homepage';
import Aboutme from '../aboutme/aboutme';

function navbar() {
    return (
      <>
          <div className='navCSS'>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutme">About Me</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contactme">Contact Me</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/aboutme" element={<Aboutme />} />
            <Route exact path="/projects" element={<projects />} />
            <Route exact path="/contactme" element={<contactme />} />
          </Routes>
      </>
    );
  }
  
  export default navbar;