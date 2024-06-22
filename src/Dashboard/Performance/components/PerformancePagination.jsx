import React from "react";

function PerformancePagination({ activeItem, setActiveItem }) {
  return (
    <div className="position-absolute end-0 top-0 text-white d-flex flex-column justify-content-around align-items-center h-100 ">
      <div
        onClick={() => setActiveItem(1)}
        className={`${
          activeItem === 1 && "active-performance-pagination"
        } pagination-item`}
      >
        1
      </div>
      <div
        onClick={() => setActiveItem(2)}
        className={`${
          activeItem === 2 && "active-performance-pagination"
        } pagination-item`}
      >
        2
      </div>
      <div
        onClick={() => setActiveItem(3)}
        className={`${
          activeItem === 3 && "active-performance-pagination"
        } pagination-item`}
      >
        3
      </div>
      <div
        onClick={() => setActiveItem(4)}
        className={`${
          activeItem === 4 && "active-performance-pagination"
        } pagination-item`}
      >
        4
      </div>
    </div>
  );
}

export default PerformancePagination;
