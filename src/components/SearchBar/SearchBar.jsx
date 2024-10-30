import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.searchQuery.value;
    if (value.trim() === "") {
      form.reset();
      toast.error("Whoops, something went wrong!");
      return;
    }
    onSubmit(value);
    form.reset();
  };

  return (
    <header className={s.header}>
      <Toaster position="top-right" reverseOrder={true} />
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          placeholder="Lead the query to search!"
          name="searchQuery"
        />
        <button className={s.button} type="submit">
          <FaSearch size="18px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
