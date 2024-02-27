import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">Bene Bono A/B Testing</h3>
     </div>
     <div className="NavBar-Links">
     </div>
   </nav>
  );
};

export default Home;
