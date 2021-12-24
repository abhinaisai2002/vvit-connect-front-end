import HomePage from './components/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom'
import NavigationBar from './components/HomePage/NavigationBar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/auth-context';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './utils/private-routes/PrivateRoute';
import {BrowserRouter} from 'react-router-dom'
import PublicRoute from './utils/private-routes/PublicRoute';

function App() {
  const authCtx = useContext(AuthContext);
  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    if(!!token && !!userData){
      authCtx.handleAuthentication(JSON.parse(userData));
    }
  },[authCtx])  
  
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <PublicRoute 
          path='/register' 
          exact 
          component={RegisterPage}/>
          <PublicRoute 
          path='/login' 
          exact 
          component={LoginPage}
          />
          <PrivateRoute 
          path='/profile' 
          exact
          component={ProfilePage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
