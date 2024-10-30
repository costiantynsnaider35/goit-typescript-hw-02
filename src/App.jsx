import { fetchImg } from "./components/api/API";
import { useEffect, useState } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectImage, setSelectImage] = useState(null);
  const [totalImg, setTotalImg] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImage = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImg(page, query);
        setImages((prev) => [...prev, ...data.results]);
        setTotalImg(data.total);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getImage();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleImgSearch = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setTotalImg(0);
  };

  const handleImageClick = (image) => {
    setSelectImage(image);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleImgSearch} />
      <div className="content">
        {error && <ErrorMessage />}
        {!loading && images.length === 0 && query && (
          <p>Sorry, no search results. Try again!</p>
        )}
        {images.length > 0 && (
          <ImageGallery onClick={handleImageClick} images={images} />
        )}
        {loading && <Loader />}
        {images.length > 0 && images.length < totalImg && !loading && (
          <LoadMoreBtn changeClick={handleChangePage} />
        )}
        {openModal && (
          <ImageModal
            isOpen={openModal}
            image={selectImage}
            onRequestClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
