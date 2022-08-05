import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav gnb">
            <ul>
                <li><Link to="/section01">main</Link></li>
                <li><Link to="/section01">sc01</Link></li>
                <li><Link to="/section02">sc02</Link></li>
                <li><Link to="/section03">sc03</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;