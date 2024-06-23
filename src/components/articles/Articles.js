import "./Articles.css"
import {articles} from "../cards-array/cards-array"

function Articles () {
    return (
        <div className="container">
            <div className="box-card">
                <h3>Featured articles</h3>
                <div className="articles">
                    {
                        articles.map(card =>
                            <div className="article">
                                <img className='article-img' src={card.cardImg} alt=""/>
                                <div className='card-body body'>
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

export default Articles