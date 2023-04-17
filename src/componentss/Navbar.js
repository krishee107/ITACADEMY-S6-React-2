import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul style={{ listStyle: `none`, display: `flex`, justifyContent: `space-around` }}>
            <li ><Link to="/" style={{ textDecoration: `none`, color: `black`, fontWeight: `bold`, fontSize: `18px`, cursor: `pointer` }}>Home</Link></li>
            <li><Link to="/presupuesto" style={{ textDecoration: `none`, color: `black`, fontWeight: `bold`, fontSize: `18px`, cursor: `pointer` }}>Presupuesto</Link></li>
        </ul>
    )
}

export default NavBar;
