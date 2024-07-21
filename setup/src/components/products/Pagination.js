import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Pagination = ({
  prevPage,
  nextPage,
  changeCurrentPage,
  numbers,
  currentPage
}) => {


  return (
    <nav className="flex justify-center my-5">
      <ul className="flex bg-white border-2 border-blue-100 content-center justify-center align-center items-center gap-3 rounded-full">
        
        <li className="flex items-center p-1 rounded-full">
          <button onClick={prevPage} className="text-xl">
            <BsArrowLeftShort />
          </button>
        </li>
    
        {numbers.map((number, i) => (
          <li
            className={`flex items-center p-1 rounded-full ${
              currentPage === number ? "bg-blue-400 " : ""
            }`}
            key={i}
          >
            <button onClick={() => changeCurrentPage(number)}>{number}</button>
          </li>
        ))}
        <li className="flex items-center p-1">
          <button href="#" onClick={nextPage} className="text-xl">
            <BsArrowRightShort />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
