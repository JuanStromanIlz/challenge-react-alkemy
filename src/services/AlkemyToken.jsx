import axios from 'axios';

export default async function AlkemyToken(data) {

  try {
    let res = await axios.post('http://challenge-react.alkemy.org', {
      email: data.email,
      password: data.password
    });

    return res;
  }
  catch(err) {
    return new Error('Los datos ingresados son incorrectos');
  }
}