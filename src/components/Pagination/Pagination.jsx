import React from 'react';
import s from './Pagination.module.css';
import { Card } from '../Card/Card';
import {children} from '../Footer/Footer ' 

export function Pagination({
  lastPage,
  setCurrentPage,
  currentPage,
  startPage,
  endPage
}) {
  const pageNumbers = [];
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }console.log(pageNumbers);
  return (
    <>
      <div className={s.container}>
        {pageNumbers.map((el) => (
          <li key={el}>
            <a href="!#">{el}</a>
          </li>
        ))}
      </div>
    </>
  );
}
