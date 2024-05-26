import style from './schoolEducationalSection.module.css'
import happyElephant from '../../images/happyElephant.png'
import happyElephant2 from '../../images/happyElephant2.png'
import happyElephant3 from '../../images/happyElephant3.png'
import happyElephant4 from '../../images/happyElephant4.png'

export default function SchoolEducationalSection(){
    return(
        <section className={style.educationalMain}>
            <div className={style.upperDiv}>
                <h4>
                    School Educational
                </h4>

                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod. Lorem ipsum dolor sit<br />amet, consectetur adipiscing elitdo eiusmod
                </span>
            </div>

            <div className={style.downDiv}>
                <div className={style.card}>

                    <img src={happyElephant}>
                    </img>

                    <div>
                        <p>
                            Art Classes
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </span>
                    </div>

                </div>

                <div className={style.card}>

                    <img src={happyElephant2}>
                    </img>

                    <div>
                        <p>
                            Art Classes
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </span>
                    </div>
                    
                </div>

                <div className={style.card}>

                    <img src={happyElephant3}>
                    </img>

                    <div>
                        <p>
                            Art Classes
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </span>
                    </div>
                    
                </div>

                <div className={style.card}>

                    <img src={happyElephant2}>
                    </img>

                    <div>
                        <p>
                            Art Classes
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </span>
                    </div>
                    
                </div>

                <div className={style.card}>

                    <img src={happyElephant}>
                    </img>

                    <div>
                        <p>
                            Art Classes
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </span>
                    </div>
                    
                </div>

                <div className={style.card}>

                    <img src={happyElephant4}>
                    </img>

                    <div>
                        <p>
                            Art Classes
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </span>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}