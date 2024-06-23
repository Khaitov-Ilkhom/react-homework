import "./Section.css"
import user from "../images/Avatar.svg"

function Section () {
    return (
        <div className="container">
            <div className='section'>
                <div className="section-box">
                    <button>Featured</button>
                    <h3>Beached to take you somewhere else</h3>
                    <div className="user">
                        <img src={user} alt=""/>
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section