import React from 'react';
import Login from '../components/users/Login';

const LoginPage = ()=>{

    return (
      <div className='position-absolute top-50 start-50 translate-middle w-75'>
        <div className='container d-flex justify-content-center align-items-center'>
          <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link active'
                id='signin-user-tab'
                data-bs-toggle='pill'
                data-bs-target='#signin-user'
                type='button'
                role='tab'
                aria-controls='signin-user'
                aria-selected='true'>
                Sign In as User
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id='signin-manager-tab'
                data-bs-toggle='pill'
                data-bs-target='#signin-manager'
                type='button'
                role='tab'
                aria-controls='signin-manager'
                aria-selected='false'>
                Sign In as Event Manager
              </button>
            </li>
          </ul>
        </div>

        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='signin-user'
            role='tabpanel'
            aria-labelledby='signin-user-tab'>
            <Login isManager={false}/>
          </div>
          <div
            className='tab-pane fade'
            id='signin-manager'
            role='tabpanel'
            aria-labelledby='signin-manager-tab'>
            <Login isManager={true}/>
          </div>
        </div>
      </div>
    );
}

export default LoginPage;
