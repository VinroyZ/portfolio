import './homepage.css';
import Navbar from '../navbar/navbar'
import { BrowserRouter } from 'react-router-dom';

function homepage() {
    return (
      <>
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
        
      <div>
        <h1>HOMEPAGE</h1>
      </div></>
    );
  }
  
  export default homepage;