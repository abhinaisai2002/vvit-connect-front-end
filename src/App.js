import HomePage from './components/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'
import NavigationBar from './components/HomePage/NavigationBar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if(!!token && !!userId){
      fetch('')
    }
  },[])  
  
  return (
    <div className='App'>
      <NavigationBar />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
