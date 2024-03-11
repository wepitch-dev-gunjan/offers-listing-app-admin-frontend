import { useState } from "react"
import login from "./login.module.css"
const Login = () => {
  let[name,setName]=useState()
    let updateName=(x)=>{
      setName(x.target.value)
    }
    let[password,setPassword]=useState()
    let updatePassword=(x)=>{
      setPassword(x.target.value)
    }
    let  submit=(x)=>{
      x.preventDefault()
        
      console.log(name,password);
    }
  return (
    <div className={login.body}>
       <div class={login.background}>
          <div class={login.shape}></div>
          <div class={login.shape}></div>
      </div>
      <form action="">
         <h4>Login Here</h4>
         <label htmlFor="">UserName</label>
         <input type="text" placeholder='UserName' value={name} onChange={updateName} id={login.username} />
         <label htmlFor="">Password</label>
         <input type="password" placeholder='Password' value={password} onChange={updatePassword} id={login.password} />
         <button className={login.social} onClick={submit}>Login</button>
         <div >
         </div>
      </form>
    </div>
  )
}

export default Login
