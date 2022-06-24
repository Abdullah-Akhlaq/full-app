import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const SignIn = () => {

  const [userFound,setUserFound]=useState(false)
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== "");
  // last name
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmitter = async (e) => {
    e.preventDefault()
    const response = await fetch(
      "https://react-3048b-default-rtdb.firebaseio.com/UserList.json"
    );
    const data = await response.json();
    for (const key in data) {
      if (data[key].emailValue !== email && data[key].password !== passwordValue
        ) {
      setUserFound(true)
      } 
      else 
      {
        setUserFound(false)
        if(data[key].isAdmin === false){
          localStorage.setItem('users',data[key].emailValue )
          navigate('/userDashboard')
        }
        else{
          navigate('/adminDashboard')  
        }
      }
    }
  };
 
  return (
    <>
    {userFound && <p>User Not found</p>}
      <form onSubmit={formSubmitter} className='form-background'>
        <div
          className={emailHasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="firstName">Email</label>
          <input
            type="email"
            id="firstName"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text"> Email should not be empty </p>
          )}
        </div>
        <div
          className={passwordHasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="lastName">Password</label>
          <input
            type="password"
            id="lastName"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className="error-text">password should not be empty </p>
          )}
        </div>
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
        
      </form>
    </>
  );
};

export default SignIn;
