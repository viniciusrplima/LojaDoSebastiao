import React from 'react';
import './styles/Card.css'

export default function Card({ id, name, price, quantity, photoURL}) {

  return (
    <div className="card">
      <div className="card-image">
        <img  src={ photoURL }/>
        <a className="btn-floating btn-large halfway-fab waves-effect waves-light green" href="/app/edit">
          <i class="material-icons">edit</i>
          </a>
      </div>
      <div className="card-content" style={{backgroundColor: '#c62828'}}>
        <span className="card-title">{ name }</span>
        <h6>Valor: R$ { price }</h6>
        <p>
          Quantidade em Estoque: { quantity }
        </p>
      </div>
    </div>
  );
}
