import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';


export default function Tv() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    axios.get("https://api-loja-do-sebastiao.herokuapp.com/tv")
    .then( ({ data }) => {
      setProducts([...data]);
    });

  }, []);

  return (
    <ProductList category="TVs" products={ products } />
  );
}
