import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';

const PublicRoute = ({component:Component,restricted,...rest})=>{

    const authCtx = useContext(AuthContext);

    return (
      <Route
        {...rest}
        render={(props) => {
          return authCtx.isAuthenticated ? (
            <Redirect to='/profile' />
          ) : (
            <Component {...props} />
          );
        }}
      />
    );
}

export default PublicRoute;