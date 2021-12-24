import React, { useContext } from 'react';
import {Redirect,Route} from 'react-router-dom'
import { AuthContext } from '../../contexts/auth-context';

const PrivateRoute = ({component:Component,...rest})=>{

    const authCtx = useContext(AuthContext);

    
    return (
        <Route
            {...rest}
            render={(props) => {
                return authCtx.isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to='/login' />
                    );
                }
            }
        />
    );
}   

export default PrivateRoute;