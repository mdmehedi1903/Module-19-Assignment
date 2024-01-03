import React from 'react';
import ProductList from '../Components/ProductList';
import PageTitle from './../Components/PageTitle';
import SkeletonLoader from '../Components/SkeletonLoader';


const ProductPage = () => {
    return (
        <> 
            <PageTitle title="Product"/>
            <ProductList title="Latest Products!"/>
        </>
    );
};

export default ProductPage;