import s from "./Card.module.css";

const Card = () => {
  return (
    <>
      <article className={s.card}>
        <img
          src="https://www.3dnatives.com/es/wp-content/uploads/sites/4/Adidas-cover.jpg"
          alt="imagenn"
          className={s.card_img}
        />
        <div className={s.card_container}>
          <h2 className={s.card_title}>Producto #1</h2>
          <p className={s.card_paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            eveniet ut exercitationem dignissimos consectetur officiis, vitae
            placeat sunt, reprehenderit molestiae tenetur in, dolore qui
            incidunt magni? Tenetur consequatur aut possimus?
          </p>
          <a href="#" className={s.card_button}>
            Quiero saber mas
          </a>
        </div>
      </article>
    </>
  );
};

export default Card;
