import s from "./Home.module.css";

const Home = () => {
  return (
    <>
      {/* <main className={s.main}>
        <h2 className={s.main_title}>Hola mundo</h2>
      </main>
      <footer className={s.footer}>
        <h2 className={s.footer_title}>Hola mundo 2</h2>
      </footer> */}
      {/* <div className={s.elem}></div> */}
      <div className={s.block}>Soy un div</div>
      <div className={s.block}>Soy un div</div>

      <a href="#" className={s.inline}>
        Soun un elemento a
      </a>
      <a href="#" className={s.inline}>
        Soun un elemento a
      </a>
      <a href="#" className={s.inline}>
        Soun un elemento a
      </a>

      <a href="#" className={s.button}>
        Soy un boton
      </a>
    </>
  );
};

export default Home;
