import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Pagination.css";

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  //create functionality for user selecting next page of paginated posts
  function nextPage() {
    setCurrentPage((page) => page + 1);
  }

  //create functionality for user selecting previous page of paginated posts
  function prevPage() {
    setCurrentPage((page) => page - 1);
  }

  //set current page to new page when user clicks button to change pages
  const history = useHistory();
  const changePage = (event, value) => {
    setPage(value);
    history.push({
      pathname: `${path}`,
      search: "?page=" + value,
    });
  };

  //return the number of posts equal to the dataLimit to be displayed to the user
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  //show the group of page numbers in pagination
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
  };

  return (
    <React.Fragment>
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={prevPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          PREV
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next page button */}
        <button
          onClick={nextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          NEXT
        </button>
      </div>
    </React.Fragment>
  );
}

export default Pagination;
