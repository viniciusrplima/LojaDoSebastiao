import axios from 'axios';

const apiURL = 'https://api-loja-do-sebastiao.herokuapp.com/';

const index = ( category ) => {
    return axios.get(`${apiURL}${category}`);
}

const store = ({ name, price, quantity, category, image }) => {
    axios.post(apiURL, {
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
    return axios.put(`${ apiURL }${ id }`, product);
}

const remove = ( id ) => {
    return axios.delete(`${ apiURL }${ id }`);
}

const updateImage = ( id, image ) => {
    const formData = new FormData();
    formData.append('file', image);

    return axios.post(`${ apiURL }image/${ id }`, formData, {
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