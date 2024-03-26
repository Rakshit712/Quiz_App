import React from 'react'
import { useReducer } from 'react'

import axios from 'axios'

    const initState = {firstName: "", lastName: "", contact:"", email:"", password:"", confirmPassword:""}


    const dispatcher =(state, action)=>{
        switch (action.type) {
            case "setEmail":  
                return{...state, email: action.payload}  
            case "setFirst":
                return{ ...state, firstName: action.payload } 
            case "setLast":
                return{...state, lastName: action.payload}
            case "setContact":
                return{...state, contact: action.payload}
            case "setPassword":
                return {...state, password : action.payload}
            case "setConfirmPassword":
                return{...state, confirmPassword: action.payload}
            default:
                    return {...state}
        }
    }

function SignIn() {

    const [state, dispatch] = useReducer(dispatcher, initState)
     
    const handleSubmit= async (e)=>{
        e.preventDefault();
        if (!state.firstName || !state.lastName || !state.email || !state.password || !state.confirmPassword) {
          alert("Please enter all required fields");
        } else if (state.password !== state.confirmPassword) {
          alert('Passwords do not match');
        } else {
          try {
            const newUser = {
              firstName: state.firstName,
              lastName: state.lastName,
              email: state.email,
              password: state.password,
              contact: state.contact
            };
            await axios.post('http://localhost:8000/api/users', newUser);
            alert("Sign In done. Please Log In");
          } catch (error) {
            console.error('Error signing in:', error);
            alert("Error signing in. Please try again later.");
          }
        }
      }
  return (
    <div className='mainDiv'>

        <h1>SignIn Page</h1>

        <div className='inBox'>

        <div>
            <label>Enter  FirstName: </label>
            <input
            className='input' 
            type="text" 
            placeholder='FirstName'
            value={state.firstName}
            required
            onChange={(e)=>{dispatch({type:"setFirst", payload:e.target.value})}}

            />

        </div>

        <div>
            <label>Enter  LastName: </label>
            <input
            className='input' 
        
            type="text" 
            placeholder='LastName'
            value={state.lastName}

            required
            onChange={(e)=>{dispatch({type:"setLast", payload:e.target.value})}}
            />

        </div>

        <div>
            <label>Enter  Email: </label>
            <input
            className='input' 
        
            type="text" 
            placeholder='Email'
            value={state.email}
            required
            onChange={(e)=>{dispatch({type:"setEmail", payload:e.target.value})}}/>

        </div>

        <div>
            <label>Enter  Contact: </label>
            <input
            className='input' 
        
            type="text" 
            placeholder='Contact'
            value={state.contact}
            required
            onChange={(e)=>{dispatch({type:"setContact", payload:e.target.value})}}/>

        </div>

        <div>
            <label>Enter  Password: </label>
            <input
            className='input' 
        
            type="Password" 
            placeholder='Password'
            value={state.password}

            required
            onChange={(e)=>{dispatch({type:"setPassword", payload:e.target.value})}}
            />

        </div>

        <div>
            <label>Confirm Password: </label>
            <input
            className='input' 
        
            type="Password" 
            placeholder='Password'
            value={state.confirmPassword}

            required
            onChange={(e)=>{dispatch({type:"setConfirmPassword", payload:e.target.value})}}
            />

        </div>

        <button
        className='button'
        onClick= {handleSubmit}
        >Submit</button>
        </div>
        
    </div>
  )
}

export default SignIn