import axios from 'axios';
import googleLogin from '../services/googleLogin.js';

//const apiURL = 'https://api-loja-do-sebastiao.herokuapp.com/';
const apiURL = 'http://localhost:5050/';

const index = ( category ) => {
    const token = googleLogin.getStoredToken();
    return axios.get(`${apiURL}${category}?token=${ token }`);
}

const store = ({ name, price, quantity, category, image }) => {
    const token = googleLogin.getStoredToken();

    axios.post(`${apiURL}?token=${ token }`, {
        name, 
        price, 
        quantity, 
        category
      }).then( ({ data }) => {
  
        // Armazena imagem
        const id = data._id;
        if(id) {
          updateImage( id, image )
          .then(() => {
            console.log('Foto adicionada');
          })
          .catch(err => {
            console.log(err);
          })
        }
  
      }).catch( err => {
        console.log(err);
      });
}

const update = ( id, product ) => {
    const token = googleLogin.getStoredToken();
    return axios.put(`${ apiURL }${ id }?token=${ token }`, product);
}

const remove = ( id ) => {
    const token = googleLogin.getStoredToken();
    return axios.delete(`${ apiURL }${ id }?token=${ token }`);
}

const updateImage = ( id, image ) => {
    const token = googleLogin.getStoredToken();
    const formData = new FormData();
    formData.append('file', image);

    return axios.post(`${ apiURL }image/${ id }?token=${ token }`, formData, {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    });

}

export default {
    index, 
    store, 
    update, 
    remove, 
    updateImage
}
