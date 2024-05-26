import style from "./home.module.css"
import secondSectionBack from "../images/secondSectionchildren.jpg"
import CardsSection from "./CardsSection/CardsSection"
import SchoolEducationalSection from "./SchoolEducationalSection/SchoolEducationalSection"

export default function Home(){
    return(
        <>
            <section className={style.sectionOne}>
                <div className={style.HomeDiv}>
                    <h1 className={style.theBest}>
                        The best in our school!
                    </h1>

                    <p className={style.OurCourses}>
                        Our Courses!
                    </p>

                    <p className={style.textLorem}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed eu dui non diam eleifend egestas.
                    </p>

                    <button className={style.ReadMore}>Read More</button>
                </div>

                <svg className={style.sec_1_bottom} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1428.75 62.05"><path class="cls-1" d="M-114,132s185,44,434,18c0,0,304-41,551,0,0,0,290.5,57.25,443.75.13v43.69H-114Z" transform="translate(114 -131.78)"></path></svg>
            </section>

            <section className={style.secondSection}>
                <div className={style.leftSide}>
                    <div className={style.block}></div>
                    <div className={style.leftSidePre}>

                    </div>
                </div>

                <div className={style.rightSide}>
                    <h2>
                        About Happy Kids
                    </h2>

                    <p>
                        Entertainment
                    </p>

                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui enim, pharetra at auctor vitae.
                    </span>

                    <button>
                        <a href="">
                            Read More
                        </a>
                    </button>
                </div>
            </section>

            <CardsSection></CardsSection>
            <SchoolEducationalSection></SchoolEducationalSection>
        </>
    )
}