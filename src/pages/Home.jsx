import {searchByName, getById} from 'services/SuperheroAPI';

export default function Home() {
  // useEffect(()=> {
  //   (async ()=>{
  //     let search = await searchByName('batman');
  //     let getId = await getById(69);
  //     console.log(search, getId);
  //   })();
  // }, []);

  return (
    <h1>Home</h1>
  );
}