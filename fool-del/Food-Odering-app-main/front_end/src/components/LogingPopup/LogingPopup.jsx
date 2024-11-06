import React, { useEffect, useState } from 'react'
import './LogingPopup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import {toast} from 'react-toastify'
import axios from "axios"

const LogingPopup = ({ setShowLogin }) => {
  // const [currState,setCurrState] = useState(("Sign Up"))
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState(("Login"))
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }


  const onlogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
    }
    else {
      alert(response.data.message)
      toast("Error")
    }
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className='login-popup'>
      <form onSubmit={onlogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter Your name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Enter email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Your password' autoComplete='off' required />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Current account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to agree to the terms of the user & privacy policy</p>
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account <span onClick={() => setCurrState("Login")}>Login Page</span></p>
        }
      </form>
    </div>
  )
}
export default LogingPopup