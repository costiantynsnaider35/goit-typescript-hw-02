import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ changeClick }) => {
  function handleClick() {
    changeClick();
  }

  return (
    <div className={s.LoadMoreBtn}>
      <button className={s.MoreBtn} type="button" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
