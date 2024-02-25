import style from './SearchBox.module.css';

export const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={style.searchBox}>
      <label className={style.searchLabel}>Find contacts by name</label>
      <input
        className={style.searchInput}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Name"
      />
    </div>
  );
};
