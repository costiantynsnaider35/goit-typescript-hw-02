import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((item) => (
        <li className={s.galleryItem} key={item.id}>
          <ImageCard image={item} onClick={() => onClick(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
