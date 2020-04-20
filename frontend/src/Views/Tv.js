import React, { useState, useEffect } from 'react';
import Cards from '../components/Card';
import axios from 'axios';


export default function Tv() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {

    axios.get("https://api-loja-do-sebastiao.herokuapp.com/tv")
    .then( ({ data }) => {
      setProducts([...data]);
    })

  }, []);

  return (
    
    <div class="section" id="index-banner">
      <div class="row" style={{ marginBottom: '0' }}>
        <div class="col s12 m10 offset-m2 l8 offset-l4 xl8 offset-xl3 center-on-small-only">
          <h2 class="header">Categoria: Eletrônicos</h2>
          <div className="col">
            {
              products.map( product => (
              <Cards 
              id={ product._id }
              name={ product.name }
              price={ product.price }
              quantity={ product.quantity }
              photoURL={ product.photoURL }
              ></Cards>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
