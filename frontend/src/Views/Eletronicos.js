import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';


export default function Eletronicos() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    axios.get("https://api-loja-do-sebastiao.herokuapp.com/eletrodomestico")
    .then( ({ data }) => {
      setProducts([...data]);
    });

  }, []);

  return (
    <ProductList category="Eletrodomésticos" products={ products } />
  );
}
