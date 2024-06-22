import React from "react";

function PerformancePagination({ activeItem, setActiveItem }) {
  return (
    <div className="position-absolute end-0 top-0 text-white ">
      <div  className="d-flex flex-column vh-100 justify-content-around align-items-center ">
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
    </div>
  );
}

export default PerformancePagination;
