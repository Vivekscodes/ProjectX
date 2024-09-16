import React, { useState } from 'react'
import "./UserLogin.css"
const UserLogin = () => {
const [action,setAction]=useState("Sign Up");
const handleSubmit = (event) => {  event.preventDefault(); }
  return (
<>
<div className="text">{action}</div>
    <form class="form">
        <div class="input-container">
{action==="Login"?<div></div>:<div className="inputs">
<input type="text" placeholder="Enter your name"/>
</div>}

<input type="email" placeholder="Enter email"/>
 </div>     
      <div class="input-container">
<input type="password" placeholder="Enter password"/>
        </div>
{action==="Sign Up"?<div></div>:<a href="#">Forgot Password??</a>

}
<div className="submit-container">
<a href="#" className={action==="Login"?"submit gray":"submit"} onClick={()=>{
setAction("Login");
}}>
Login
      </a>
<a href="#" className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{
setAction("Sign Up");
}}>
Sign Up
</a>
</div>

   </form>
</>
  )
}

export default UserLogin