import "./Hero.css"

import avatarIcon from "../images/Avatar.svg"

function Hero () {
    return (
        <div className="container">
            <div className="hero">
                <div className='box'>
                    <h3>5 mind blowing facts about the iPhone 14</h3>
                    <div className="box-bottom">
                        <img src={avatarIcon} alt=""/>
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
