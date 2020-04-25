import React, { useState, useEffect } from 'react';
import './styles/Card.css';
import database from '../services/database';

export default function Card({ product }) {

  const { _id: id, name, price, quantity, photoURL } = product;

  const [prodQuantity, setProdQuantity] = useState(quantity);
  const [background, setBackground] = useState('white');



  useEffect(() => {
    if (prodQuantity === 0) {
      setBackground('red');
    } else if (prodQuantity < 10) {
      setBackground('#ffee58');
    } else {
      setBackground('white');
    }
  }, [prodQuantity])

  const increment = function () {
	  setProdQuantity(prev => {
    		database.update(id, { quantity: prev+1 });
		return prev+1;
	  });
  }

  const decrement = function () {
	  setProdQuantity(prev => {
		  if( prev > 0 ) {
    			database.update(id, { quantity: prev-1 });
			return prev-1;
		  }
		  return 0;
	  });
  }

  const removeProduct = function (event) {
    event.preventDefault();
    database.remove(id)
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
  }



  return (

    <div className="col s12 m6 l6 xl6">
      <div className="card" style={{ minWidth: '300px', background }}>
        <div className="card-image" ><img src={photoURL} /></div>
        <div className="card-content center-align">
          <strong className="card-title">{name}</strong>
          <div className="container">
            <h6>R$ {price}</h6>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <div className="col s4">
              <a className="btn-floating btn-small waves-effect waves-light red left" onClick={decrement}><i className="material-icons">remove</i></a>
            </div>
            <div className="col s4 center-align" style={{ fontSize: '20px' }}>
              <span> {prodQuantity}</span>
            </div>
            <div className="col s4">
              <a className="btn-floating btn-small waves-effect waves-light green right" onClick={increment}><i className="material-icons">add</i></a>

            </div>
          </div>

        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6 m6 l6 xl6">
              <a className="grey-text text-darken-2" href={`/app/edit/${id}`}>
                <div className="col s6 m6 l6 xl6">Editar</div>
                <div className="col s6 m6 l6 xl6"><i className="material-icons small">edit</i></div>
              </a>
            </div>
            <div className="col s6 m6 l6 xl6">
              <a className="grey-text text-darken-2" style={{ cursor: 'pointer' }}>
                <div className="col s6 m6 l6 xl6 activator">Excluir</div>
                <div className="col s6 m6 l6 xl6"><i className="material-icons small">delete</i></div>
              </a>
            </div>
          </div>
        </div>
        <div className="card-reveal">
          <h5 className="row">Ao clicar em sim você ira excluir o produto {name} da base de dados. Você tem certeza que deseja excluir?</h5>
          <div className="container">
            <a className="waves-effect waves-light btn left green darken-3 card-title" onClick={event => { removeProduct(event) }}>SIM</a>
            <a className="waves-effect waves-light btn right red darken-3 card-title">NÃO</a>
          </div>
        </div>



      </div>
    </div>



  );
}
