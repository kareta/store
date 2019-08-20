import ReactPaginate from "react-paginate";
import React from "react";
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props) => (
  <ReactPaginate
    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    breakClassName={'page-item  page-link'}
    containerClassName={'pagination'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    nextClassName={'page-item'}
    previousClassName={'page-item'}
    nextLinkClassName={'page-link'}
    previousLinkClassName={'page-link'}
    pageCount={props.pageCount}
    marginPagesDisplayed={1}
    pageRangeDisplayed={3}
    activeClassName={'active'}
    onPageChange={props.onPageClick}
  />
);

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default Pagination;