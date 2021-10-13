import axios from 'axios';

const superHeroInstance = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/${process.env.REACT_APP_SuperHeroTOKEN}`
});

function resHasError(res) {
  if (res.response === 'error') {
    throw new Error(res.error);
  }
} 

export async function searchByName(name) {
  try {
    let res = await superHeroInstance.get(`/search/${name}`);
    resHasError(res.data);
    return res.data
  }
  catch(err) {
    return err;
  }
}

export async function getById(id) {
  try {
    let res = await superHeroInstance.get(`/${id}`);
    resHasError(res.data);
    return res.data;
  }
   catch(err) {
     return err;
   }
}

