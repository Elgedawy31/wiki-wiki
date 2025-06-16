import React from 'react';
import './Pagination.css';

const Pagination = ({ 
  meta, 
  onPageChange, 
  loading = false,
  className = "" 
}) => {
  if (!meta || !meta.last_page || meta.last_page <= 1) {
    return null;
  }

  const {
    current_page,
    last_page,
    from,
    to,
    total,
    per_page
  } = meta;

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (last_page <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to maxVisiblePages
      for (let i = 1; i <= last_page; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);
      
      if (current_page > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, current_page - 1);
      const end = Math.min(last_page - 1, current_page + 1);
      
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== last_page) {
          pages.push(i);
        }
      }
      
      if (current_page < last_page - 2) {
        pages.push('...');
      }
      
      // Show last page
      if (last_page > 1) {
        pages.push(last_page);
      }
    }
    
    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== current_page && page !== '...' && !loading) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (current_page > 1 && !loading) {
      onPageChange(current_page - 1);
    }
  };

  const handleNext = () => {
    if (current_page < last_page && !loading) {
      onPageChange(current_page + 1);
    }
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className={`pagination-container ${className}`}>
      {/* Pagination Info */}
      <div className="pagination-info">
        <span className="text-grey">
          Showing {from || 0} to {to || 0} of {total || 0} results
        </span>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        {/* Previous Button */}
        <button
          className={`pagination-btn pagination-prev ${
            current_page === 1 || loading ? 'disabled' : ''
          }`}
          onClick={handlePrevious}
          disabled={current_page === 1 || loading}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Previous
        </button>

        {/* Page Numbers */}
        <div className="pagination-numbers">
          {pageNumbers.map((page, index) => (
            <button
              key={index}
              className={`pagination-number ${
                page === current_page ? 'active' : ''
              } ${page === '...' ? 'dots' : ''} ${loading ? 'disabled' : ''}`}
              onClick={() => handlePageClick(page)}
              disabled={page === '...' || loading}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`pagination-btn pagination-next ${
            current_page === last_page || loading ? 'disabled' : ''
          }`}
          onClick={handleNext}
          disabled={current_page === last_page || loading}
        >
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Items per page info */}
      <div className="pagination-per-page">
        <span className="text-grey">
          {per_page} items per page
        </span>
      </div>
    </div>
  );
};

export default Pagination;
