import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const onClean = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="display-form">
        <form onSubmit={onSubmit} aria-label="form">
          <input
            type="text"
            placeholder="Search Gifs"
            value={inputValue}
            onChange={onInputChange}
          />
        </form>
        <button onClick={onClean} className="btn-reload">
          x
        </button>
      </div>
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
