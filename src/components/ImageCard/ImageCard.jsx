import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.ImageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
