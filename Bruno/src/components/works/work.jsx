import Card from "../proyect/card-proyect/Card"
import '../static/css/Card_p_w.css'
import icone from '../static/svg/css.svg'

export default function Work() {


    return (

        <>
            <section className="project_work">
                <main className="project_work-main">
                    <div className="project_work-main-ilustracion Work"></div>
                    <h3>Works</h3>
                </main>
                <aside className="project_work-cards_project_work">
                    <div className="project_work-cards_project_work-text">
                        <p>
                            Estos son los trabajos que realice hasta la fecha, este trabajo fue unicamente como freelancer.
                        </p>
                    </div>
                    <div className="project_work-card_project_work-cards">
                        <Card 
                            img={icone}  
                            textA="Visita el sitio web" 
                            textDes="En esta ocacion tuve la suerte de formar parte de Gordo's Grill, mis tareas fueron desarrollar de manera individual una web para la familia de restaurantes antes mencionada, me ocupe del front-end ( obviamente tambien me encargue del UI/UX ), del back-end y ademas del CEO." 
                            textCalendar="12 / 04 / 2022 - 10 / 9 / 2022" 
                        />             
                    </div>
                </aside>
            </section>
        </>

    )

}