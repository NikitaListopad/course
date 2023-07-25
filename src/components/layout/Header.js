import {Link, NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/cards'>
                        Cards
                    </Link>
                </li>
                <li>
                    <NavLink to='/card'>
                        NavLink Card
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}