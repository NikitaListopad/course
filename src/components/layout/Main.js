import {Link, NavLink, Outlet} from "react-router-dom";
import './Main.css';
import {Header} from "./Header";
export const Main = () => {

    return (
        <div className='main-container'>
            <Header />
            <div className='main-wrapper'>
                <Outlet />
            </div>
        </div>
    )
}