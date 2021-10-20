import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import PrivateRoute from 'components/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, newTheme } from 'styled-components/GlobalStyles';
import Search from 'pages/Search';
import TeamContext from 'context/TeamContext';

function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <TeamContext>
        <GlobalStyles />
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute path='/search' component={Search} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </TeamContext>
    </ThemeProvider>
  );
}

export default App;
