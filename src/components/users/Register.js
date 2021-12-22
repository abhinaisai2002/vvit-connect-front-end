import React,{useContext, useRef} from 'react'
import { AuthContext } from '../../contexts/auth-context';
import useInput from '../../utils/custom-hooks/useInput';

const Register = ()=>{

    const authCtx = useContext(AuthContext);
    // --------------------
    const {
      value:fullName,
      handleChange:fullNameChangeHandler,
      inputBlurHandler:fullNameBlurHandler,
      hasError:fullNameError,
      reset:fullNameReset,
      valueIsValid:fullNameIsValid
    } = useInput( name => name.trim().length>0);

    // --------------------
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
    } = useInput( password => password.length>=8);

    // ------------------
    const {
      value: password2,
      handleChange: password2ChangeHandler,
      inputBlurHandler: password2BlurHandler,
      hasError: password2Error,
      reset: password2Reset,
      valueIsValid: password2IsValid,
    } = useInput(text => text === password);

    // -------------------
    const yearRef = useRef();
    const branchRef = useRef();
    const sectionRef = useRef();

    const submitHandler = (event)=>{
        event.preventDefault();
        const formValidity = !fullNameError && !emailError && !passwordError
        if (!formValidity){
          return ;
        }
        const userData = {
          fullName,
          email,
          password,
          year:yearRef.current.value,
          branch:branchRef.current.value,
          section:sectionRef.current.value
        }
        authCtx.signUp(userData);

    }

    return (
      <div className='container d-flex justify-content-center align-items-center'>
        <form
          onSubmit={submitHandler}
          className='p-4 w-75 border border-dark m-5'>
          <div className='container border-bottom border-dark'>
            <h1>Register Your Account</h1>
          </div>
          <div className='container p-3'>
            <div className='row'>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor='fullname' className='form-label'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className={`form-control ${
                      fullNameError ? 'border-danger' : ''
                    }`}
                    id='fullname'
                    placeholder='Enter fullname starting with your surname'
                    value={fullName}
                    onChange={fullNameChangeHandler}
                    onBlur={fullNameBlurHandler}
                    required
                  />
                  {fullNameError && (
                    <div className='text-danger'>
                      Please enter a proper value.
                    </div>
                  )}
                </div>
              </div>
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
                    placeholder='Create a new password'
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
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor='password2' className='form-label'>
                    Re-enter the password
                  </label>
                  <input
                    type='password'
                    className={`form-control ${
                      password2Error ? 'border-danger' : ''
                    }`}
                    id='password2'
                    placeholder='Re-enter the password you created.'
                    value={password2}
                    onChange={password2ChangeHandler}
                    onBlur={password2BlurHandler}
                    required
                  />
                  {password2Error && (
                    <div className='text-danger'>
                      Please enter the same password.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <label htmlFor='year' className='form-label'>
                  Select Year
                </label>
                <select
                  ref={yearRef}
                  className='form-select'
                  aria-label='Default select example'
                  id='year'>
                  <option value='1' defaultValue>
                    I
                  </option>
                  <option value='2'>II</option>
                  <option value='3'>III</option>
                  <option value='4'>IV</option>
                </select>
              </div>
              <div className='col'>
                <label htmlFor='branch' className='form-label'>
                  Select branch
                </label>
                <select
                  ref={branchRef}
                  className='form-select'
                  aria-label='Default select example'
                  id='branch'>
                  <option value='CSE' defaultValue>
                    CSE
                  </option>
                  <option value='ECE'>ECE</option>
                  <option value='CE'>CE</option>
                  <option value='ME'>ME</option>
                  <option value='EEE'>EEE</option>
                  <option value='IT'>IT</option>
                </select>
              </div>
              <div className='col'>
                <label htmlFor='section' className='form-label'>
                  Select section
                </label>
                <select
                  ref={sectionRef}
                  className='form-select'
                  aria-label='Default select example'
                  id='section'>
                  <option value='A' defaultValue>A</option>
                  <option value='B'>B</option>
                  <option value='C'>C</option>
                  <option value='D'>D</option>
                </select>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col'>
                <div className='col-12'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='invalidCheck2'
                      required
                    />
                    <label className='form-check-label' htmlFor='invalidCheck2'>
                      Agree to terms and conditions
                    </label>
                  </div>
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

  return emailRe.test(email) ;
};


export default Register;