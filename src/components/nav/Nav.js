import "./Nav.css"
import {IoNotificationsOutline} from "react-icons/io5";
import {GoGift} from "react-icons/go";
import logo from "../images/logo.svg"
import userImg from "../images/avatar-icon.svg"

function Nav() {
    return (
        <div className='container'>
            <nav className="navbar">
                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>
                <div className='right-box'>
                    <div className='select'>
                        <img src={userImg} alt=""/>
                        <select name="" id="">
                            <option value="bruce lee">Bruce Lee</option>
                            <option value="bruce">Bruce</option>
                        </select>
                    </div>
                    <button className='btn'><GoGift/></button>
                    <button className='btn'><IoNotificationsOutline/></button>
                </div>
            </nav>
        </div>
    )
}

export default Nav