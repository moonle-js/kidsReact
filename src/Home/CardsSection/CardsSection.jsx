import style from './cardsSection.module.css'

import cardElephant from '../../images/cardElephant.png'
import cardEdinoroq from '../../images/cardEdinoroq.png'
import cardElephant2 from '../../images/elephantIcon.png'
import star from '../../images/star.svg'

export default function CardsSection(){
    return(
        <section className={style.cardsSection}>
            <div className={style.mainCardsSection}>

                <div className={style.cardOutside}>
                    <div className={style.cardInside}>
                        <img 
                        className={style.cardImage}
                        src={cardElephant}
                        alt='elephant'
                        title='elephant'
                        >
                        </img>

                        <h3>
                            Playground
                        </h3>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <button className={style.readMoreButton}>
                            <span>
                                Read More
                            </span>
                            <img src={star}
                            title='star'>
                            </img>
                        </button>
                    </div>
                </div>

                <div className={style.cardOutside}>
                    <div className={style.cardInside}>
                        <img 
                        className={style.cardImage}
                        src={cardEdinoroq}
                        alt='elephant'
                        title='elephant'
                        >
                        </img>

                        <h3>
                            Entertaiment
                        </h3>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <button className={style.readMoreButton}>
                            <span>
                                Read More
                            </span>
                            <img src={star}
                            title='star'>
                            </img>
                        </button>
                    </div>
                </div>

                <div className={style.cardOutside}>
                    <div className={style.cardInside}>
                        <img 
                        className={style.cardImage}
                        src={cardElephant2}
                        alt='elephant'
                        title='elephant'
                        >
                        </img>

                        <h3>
                            Environment
                        </h3>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <button className={style.readMoreButton}>
                            <span>
                                Read More
                            </span>
                            <img src={star}
                            title='star'>
                            </img>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}