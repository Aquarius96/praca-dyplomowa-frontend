import axios from "axios";
import * as config from './axios-config';

export const uploadImage = (name, id, image) => {
  axios.post(config.URL + "photo/" + name + "/" + id, image)
    .then(() => console.log('Zdjęcie dodane'))
    .catch(error => console.log(error.message))
}