import React, { useState, useEffect } from 'react';
import database from '../services/database';

export default function Edit( props ) {

  const id = props.match.params.id;

  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState(-1);
  const [ quantity, setQuantity ] = useState(-1);
  const [ category, setCategory ] = useState('');
  const [ image, setImage ] = useState(null);

  const updateProduct = function( id, product ) {
    const { name, price, quantity, category, image } = product;
    let updateData = {};

    if(name != '') updateData.name = name;
    if(price != -1 && price != '') updateData.price = price;
    if(quantity != -1 && quantity != '') updateData.quantity = quantity;
    if(category != '') updateData.category = category;

    database.update( id, updateData )
    .then(() => {
      console.log('Produto atualizado')
    })
    .catch(err => {
      console.log(err);
    })

    if(image != null) {
      database.updateImage( id, image )
      .then(() => {
        console.log('Foto atualizada');
      })
      .catch(err => {
        console.log(err);
      })
    }

    window.location.href = 'https://loja-do-sebastiao.herokuapp.com/app/'+category;
  }

  return (

    <div className="section" id="index-banner">
    <div className="row" style={{ marginBottom: '0' }}>
      <div className="col s12 m10 offset-m2 l8 offset-l4 xl8 offset-xl3 center-on-small-only">
        <h2 className="header">Atualizar Produto</h2>
        <div className="row">
          <form className="col s12"  onSubmit={event => {
              event.preventDefault();
              updateProduct(id, { name, price, quantity, category, image }) 
            }}>
            <div className="row">
                <div className="input-field col s12 m12 l6">
                  <i className="material-icons prefix">panorama_fish_eye</i>
                  <input id="id" type="text" className="validate" disabled />
                  <label for="id">{ id }</label>
                </div>
              </div>

            <div className="row">
              <div className="input-field col s12 m12 l6" onChange={event => { setName(event.target.value) }}>
                <i className="material-icons prefix">add_shopping_cart</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label for="icon_prefix">Nome do Produto</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l6" onChange={event => { setPrice(event.target.value) }}>
                <i className="material-icons prefix">attach_money</i>
                <input id="money" type="text" className="validate" />
                <label for="money">Valor do Produto</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l6" onChange={event => { setQuantity(event.target.value) }}>
                <i className="material-icons prefix">details</i>
                <input id="quantidade" type="text" className="validate" />
                <label for="quantidade">Quantidade Inicial</label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s12 m12 l6" onChange={event => { setCategory(event.target.value) }}>
                <i className="material-icons prefix hide-on-small-only">content_paste</i>
                <select>
                  <option value=""></option>
                  <option value="tv">Tv's</option>
                  <option value="eletrodomestico">Eletrodoméstico</option>
                  <option value="videogame">Videogame</option>
                  <option value="celular">Celulare</option>
                </select>
                <label>Selecione a Categoria</label>
              </div>
            </div>
            <div className="row">
              <div className="file-field input-field col s12 m12 l6" onChange={event => { setImage(event.target.files[0]) }}>
                <div className="btn grey darken-2">
                  <span>Arquivo da foto</span>
                  <input type="file" />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>
            <button class="btn waves-effect waves-light grey darken-2" type="submit" name="action">
              Atualizar
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
