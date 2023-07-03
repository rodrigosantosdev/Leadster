import React, { useState } from 'react';
import { NavPage, PageItem, PageLink, PageTitle } from "./style";

interface PaginationProps {  
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  handleClick: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  const [currentPage, setCurrentPage] = useState(3);
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <NavPage>
      <PageTitle>Página</PageTitle>
      <ul>
        {pageNumbers.map((number) => (
          <PageItem 
          key={number}
          className={`page-item ${currentPage === number ? 'active' : ''}`}
        >
            <PageLink onClick={() => handleClick(number)}>
              {number}
            </PageLink>
          </PageItem>
        ))}
      </ul>
    </NavPage>
  );
};

