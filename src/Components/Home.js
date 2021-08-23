// import React, {useState, useEffect} from "react";
import React from "react";
import TagsCat from '../Components/TagsCat'
import ProductsList from "./Product/ProductsList";


const Home = () => {
    return (
        <div className="body">
            <ProductsList  />
            <TagsCat />
            </div>
    );
};

export default Home;