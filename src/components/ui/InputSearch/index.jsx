import React from "react";
import SearchIcon from './../../../assets/icons/searchIcon.svg'

function InputSearch({ className, setSearchedValue, placeHolder, showSearch }) {
  return (
    <div className={className ? className : "search-input__container"}>
      <input
        className="input-search"
        type="text"
        placeholder={placeHolder ? placeHolder : ""}
      />
      {showSearch && (
        <img src={SearchIcon} className="search-icon" alt="search-icon" />
      )}
    </div>
  );
}

export default InputSearch;
