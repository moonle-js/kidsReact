import style from './header.module.css'
import elephant from '../images/elephantIcon.png'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <ul className={style.mainUl}>
                        <li className={style.logoLink}>
                            <a href='/'>
                                <img className={style.logo} src={elephant}></img>
                                <p>
                                    <span>m4</span>
                                    <span>kids</span>
                                </p>
                            </a>
                        </li>

                        <li className={style.navLinks}>
                            <ul className={style.SecondUl}>
                                <li>
                                    <a href='/'>
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href='/demo'>
                                        Live Demo+
                                    </a>
                                </li>

                                <li className={style.liveDemo}>
                                    <a>
                                        Live Demo Blocks+
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        Buy Now
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className={style.cardList}>
                            <a className={style.card} href='/card'>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}