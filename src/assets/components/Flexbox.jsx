import s from "./Flexbox.module.css";

const Flexbox = () => {
  return (
    <>
      <div className={s.flex}>
        <div className={s.elem1}>#1</div>
        <div className={s.elem2}>#2</div>
        <div className={s.elem3}>#3</div>
      </div>
    </>
  );
};

export default Flexbox;
