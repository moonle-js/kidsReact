import style from "./home.module.css"

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
            </section>

            <section className={style.secondSection}>
                <div className={style.leftSide}>
                    <div className={style.leftSidePre}>

                    </div>
                </div>

                <div className={style.rightSide}>
                    
                </div>
            </section>
        </>
    )
}