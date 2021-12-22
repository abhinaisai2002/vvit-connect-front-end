import React,{useContext} from 'react';
import { AuthContext } from '../../contexts/auth-context';
import useInput from '../../utils/custom-hooks/useInput';

const Login = ()=>{

    const authCtx = useContext(AuthContext);
    // ----------------------
    const {
      value: email,
      handleChange: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      hasError: emailError,
      reset: emailReset,
      valueIsValid: emailIsValid,
    } = useInput(validateEmail);

    // ----------------------
    const {
      value: password,
      handleChange: passwordChangeHandler,
      inputBlurHandler: passwordBlurHandler,
      hasError: passwordError,
      reset: passwordReset,
      valueIsValid: passwordIsValid,
    } = useInput((password) => password.length >= 8);

    // -----------------------
    const submitHandler = (event) => {
      event.preventDefault();
      const formValidity = !emailError && !passwordError;
      if (!formValidity) {
        return;
      }
      authCtx.login(email,password);
    };

    return (
      <div className='container d-flex justify-content-center align-items-center'>
        <form
          onSubmit={submitHandler}
          className='p-4 w-50 border border-dark m-5'>
          <div className='container border-bottom border-dark'>
            <h1>Login Your Account</h1>
          </div>
          <div className='container p-3'>
            {authCtx.hasError && <div class='alert alert-danger' role='alert'>
              {authCtx.message}
            </div>}
            <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className={`form-control ${
                      emailError ? 'border-danger' : ''
                    }`}
                    id='email'
                    placeholder='rollno@vvit.net'
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    required
                  />
                  {emailError && (
                    <div className='text-danger'>
                      Please enter a proper email.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor='password1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className={`form-control ${
                      passwordError ? 'border-danger' : ''
                    }`}
                    id='password1'
                    placeholder='Enter your password'
                    value={password}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    required
                  />
                  {passwordError && (
                    <div className='text-danger'>
                      Please enter a password more than eight characters.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='row mt-4 '>
              <div className='col-12 d-flex justify-content-end'>
                <button type='submit' className='btn btn-primary'>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}

const validateEmail = (email) => {
  let emailRe = new RegExp(
    '[0-9][0-9][bB][qQ]1[aA][0-1][0-5][0-9A-Za-z][0-9]@vvit.net'
  );

  return emailRe.test(email);
};

export default Login;