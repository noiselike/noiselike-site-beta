import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="topnav">
//       <Link className="active" to="/">Explore</Link>
//       <Link to="/community">Community</Link>
//       <Link to="/profile">Profile</Link>
//       <Link to="/mint">Mint</Link>
//       <Link to="/venue">Venue</Link>
//       <Link to="/about">About</Link>
//     </div>
//   );
// }

// export default Navbar;

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="topnav">
      <NavLink exact activeClassName="active" to="/">Explore</NavLink>
      <NavLink activeClassName="active" to="/community">Community</NavLink>
      <NavLink activeClassName="active" to="/profile">Profile</NavLink>
      <NavLink activeClassName="active" to="/mint">Mint</NavLink>
      <NavLink activeClassName="active" to="/venue">Venue</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
    </div>
  );
}

export default Navbar;
