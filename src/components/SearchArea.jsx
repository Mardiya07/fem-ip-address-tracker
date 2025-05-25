import React, { useContext } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import { FormContext } from "../utils/FormContext";

function SearchArea() {
  const { userGenIP, handleSubmit, handlechange } = useContext(FormContext);

  return (
    <form className="searchArea" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="192.212.174.101"
        onChange={handlechange}
        value={userGenIP}
        className="searchInput"
        required
      ></input>
      <button type="submit" className="submitBtn">
        <img src={arrowIcon} alt="arrow" />
      </button>
    </form>
  );
}

export default SearchArea;
