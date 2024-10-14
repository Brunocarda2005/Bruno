export default function CardContact(params) {
  return (
    <div className={`app__contact__conten__cards__content__card ${params.name}`}>
      <aside className="app__contact__conten__cards__content__card__title">
        <span>{params.name}</span>
      </aside>
      <aside className="app__contact__conten__cards__content__card__link">
        <span>Ver ahora</span>
      </aside>
    </div>
  );
}
