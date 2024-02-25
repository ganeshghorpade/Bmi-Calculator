import './comp.css';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './comp.css'
/* import {Link} from 'react-router-dom' */
import image2 from './BMIF.png';
function Header() {
return (
  <>
  
  <div className="up" >
  <img src={image2} className='logo-h' alt="" />
    <Navbar expand="lg" className="" id="nav-1">  {/* bg-info */}
        {/* <Link to="/" className="ms-3">
      <img src="./src/img.png" className="" alt="Logo"/>
      </Link>      
        <div href="/" className='text-light' >TextFun</div> */}
        
          <section className="">
            <NavLink className="n  " to="/">Home</NavLink>
            <NavLink className="n  ps" to="/About">About us </NavLink>
            <NavLink className="n  " to="/Contact"> Contact Us </NavLink>
          </section>
        
    </Navbar>
    </div>
  </>
)
}

export default Header
