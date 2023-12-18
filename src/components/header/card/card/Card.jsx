export default function Card({ Img }) {
  return (
    <div className="social__cards__card">
      <picture className="social__cards__card__img">
        <img src={Img} alt="" className="social__cards__card__img" />
      </picture>
    </div>
  );
}
