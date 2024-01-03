// src/SearchResultsPage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import PageTitle from './PageTitle';

const SearchResultsPage = () => {


  return (
    <>  
        <PageTitle title='You searched for the product "Iphone 14 Max Pro"'/>
        <ProductList title="Search Result"/>
    </>
  );
};

export default SearchResultsPage;
