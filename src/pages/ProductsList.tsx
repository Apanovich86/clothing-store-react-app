import React from 'react';
import HeaderContainer from "../Container/HeaderContainer";
import {Container} from "react-bootstrap";
import ProductPage from "./ProductPage";
import {Link} from "react-router-dom";

const ProductsList = () => {
    return (
        <>
            <Container>
                <Link to="/product/add">
                <button className="btnAddProd">+ ДОДАТИ</button>
                </Link>
                <h1>Усі товари</h1>
                <div className="row">



                </div>
            </Container>
        </>
    );
};

export default ProductsList;