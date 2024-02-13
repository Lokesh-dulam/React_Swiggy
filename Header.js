import {IMG_URL} from "./utils/utilities"
import {useState} from "react"
const Header=()=>{
  const [ReactBtn,setReactBtn]=useState("LogIn")
    return(
      <div className="header">
      <div className="logo-container">
      <div>
        <img className="img-logo" src={IMG_URL}/>
      </div>
      <div className="list">
      <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="button" onClick={()=>{
            ReactBtn==="LogIn"?setReactBtn("LogOut"):setReactBtn("LogIn")
          }}>{ReactBtn}</button>
      </ul>
      </div>
      </div>
      </div>
    )
  }
  export default Header