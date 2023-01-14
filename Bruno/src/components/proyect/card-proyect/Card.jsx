import "../../static/css/Card_p_w.css";

export default function Card(props) {
  return (
    <div className="project_work-card_project_work-cards-card card">
      <div className="project_work-card_project_work-cards-card-mark">
        <span></span>
        <div className="mark">
          <img src={props.img} alt={props.img} />
        </div>
      </div>
      <div className="project_work-card_project_work-cards-card-text">
        <a href="">{props.textA}</a>
        <p className="project_work-card_project_work-cards-card-text-des">
          {props.textDes}
        </p>
        <p className="project_work-card_project_work-cards-card-text-calendar">
          {props.textCalendar}
        </p>
      </div>
    </div>
  );
}
