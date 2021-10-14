import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({component: Component, path, exact}) {

  const validationMethod = localStorage.getItem('challange-react-alkemy');

  return (
    <Route 
      path={path}
      exact={exact}
      render={() =>
        validationMethod ? 
        <Component /> : 
        <Redirect to='/login' />
      }
    />
  );
}