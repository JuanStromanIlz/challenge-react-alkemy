import { useParams } from 'react-router';

export default function Search() {
  const { name } = useParams();

  return (
    <h1>{name}</h1>
  );
}