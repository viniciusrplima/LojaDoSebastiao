import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';


export default function Celulares() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    axios.get("https://api-loja-do-sebastiao.herokuapp.com/celular")
    .then( ({ data }) => {
      setProducts([...data]);
    });

  }, []);

  return (
    <ProductList category="Celulares" products={ products } />
  );
}
