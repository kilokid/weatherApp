import './inputSearch.scss';

const InputSearch = () => {
  return (
    <form className="search">
      <input className="search__input" type="text" placeholder="Введите название города" />
      <button className="search__button" type="submit">
        Найти
      </button>
    </form>
  );
};

export default InputSearch;
