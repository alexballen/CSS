import s from "./Home.module.css";
//import img from "../react.svg";

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
      {/* <div className={s.black}></div> */}
      {/* <div className={s.pacman}></div> */}
      {/* <div className={s.card}>
        <img src={img} alt="imag" className={s.img} />
        <h2 className={s.title}>Hola mundo bienvenido a Cali</h2>
        <p className={s.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Delectus, fugiat
          reprehenderit, accusantium odit facere, veniam corporis exercitationem
          aperiam magni itaque saepe cupiditate at? Eveniet optio ratione quasi
          quod, iste culpa!
        </p>
        <p className={s.paragrafphdos}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum omnis
          veniam impedit facere consequuntur perspiciatis cupiditate iure
          deserunt nisi? Laborum doloribus aspernatur necessitatibus vel
          veritatis eveniet alias beatae ad aperiam?
        </p>
      </div> */}
      {/*  <div className={s.container}>
        <h2 className={s.titleuno}>Soy el primer elemento</h2>
        <h2 className={s.titledos}>Soy el segundo elemento</h2>
        <h2 className={s.titletres}>Soy el tercer elemento</h2>
        <h2 className={s.titlecuatro}>Soy el cuarto elemento</h2>
      </div> */}
      <div className={s.container}>
        {/* <div className={s.static}>Static</div> */}
        <div className={s.relative}>Relative</div>
        <div className={s.absolute}>Absolute</div>
        <div className={s.fixed}>Fixed</div>
      </div>

      {/* <div className={s.container}>
        <div className={s.sticky}></div>
      </div> */}
    </>
  );
};

export default Home;
