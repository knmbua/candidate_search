import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <section className="nav">
      <NavLink className="nav-item nav-link" to="/">Home</NavLink>
      <NavLink className="nav-item nav-link" to="/SavedCandidates">Potential Candidates</NavLink>
    </section> 
  )
};

export default Nav;