import {Outlet, Link} from "react-router-dom";

const Menu = () => {
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Menu