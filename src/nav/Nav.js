import "./Nav.css"
import {IoNotificationsOutline} from "react-icons/io5";
import {GoGift} from "react-icons/go";
import logo from "../images/logo.svg"

function Nav() {
    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>
                <div className='right-box'>
                    <div>
                        <img src="" alt=""/>
                        <select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <button className='btn'><GoGift/></button>
                    <button className='btn'><IoNotificationsOutline/></button>
                </div>
            </nav>
        </>
    )
}

export default Nav