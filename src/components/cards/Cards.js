import "./Cards.css"
import {cards} from "../cards-array/cards-array"

function Cards () {
    return (
        <div className="container">
            <div className="box-card">
                <h3>Featured articles</h3>
                <div className="cards">
                    {
                        cards.map(card =>
                            <div className="card">
                                <img className='card-img' src={card.cardImg} alt=""/>
                                <div className='card-body'>
                                    <h4>{card.title}</h4>
                                    <div className='user-title'>
                                        <img src={card.userIcon} alt=""/>
                                        <p>{card.userTitle}</p>
                                    </div>
                                    <p className='desc'>{card.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards