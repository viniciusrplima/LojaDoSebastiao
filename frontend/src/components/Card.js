import React from 'react';
import './styles/Card.css'

export default function Card({ id, name, price, quantity, photoURL }) {

  let background;
  if (quantity === 0) {
    background = {
      backgroundColor: 'red'
    }
  } else if (quantity < 10) {
    background = {
      backgroundColor: '#ffee58'
    }
  }
  return (
    <div className="col s12 m6 l6 xl6">
      <div className="card" id={id} style={{ minWidth: '300px' }}>
        <div className="card-image" ><img src={photoURL} /></div>
        <div className="card-content center-align" style={background}>
          <strong className="card-title">{name}</strong>
          <div className="container">
            <h6>R$ {price}</h6>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <div className="col s4">
              <a className="btn-floating btn-small waves-effect waves-light red left"><i className="material-icons">remove</i></a>
            </div>
            <div className="col s4 center-align" style={{ fontSize: '20px' }}>
              <span> {quantity}</span>
            </div>
            <div className="col s4">
              <a className="btn-floating btn-small waves-effect waves-light green right"><i className="material-icons">add</i></a>

            </div>
          </div>

        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6 m6 l6 xl6">
              <a className="grey-text text-darken-2" href="/app/edit/">
                <div className="col s6 m6 l6 xl6">Editar</div>
                <div className="col s6 m6 l6 xl6"><i className="material-icons small">edit</i></div>
              </a>
            </div>
            <div className="col s6 m6 l6 xl6">
              <a className="grey-text text-darken-2" href="/app/delete/">
                <div className="col s6 m6 l6 xl6">Excluir</div>
                <div className="col s6 m6 l6 xl6"><i className="material-icons small">delete</i></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
