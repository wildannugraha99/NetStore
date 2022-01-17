import React, { useState} from "react";
import { useHistory} from "react-router-dom";
import "./LoginForm.scss";
import logicon from "../../Assets/icons/login-user.svg";
import passicon from "../../Assets/icons/Unlock.svg";

export default function FormExample({reqData}) {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
   function usernameFunction(e){
    const data = e.target.value
    setUsername(data)
  }

  function passwordFunction(e){
    const data = e.target.value
    setPassword(data)
  }

  function submit(e){
    e.preventDefault()
    reqData(username,password)
    history.push({
      pathname:"/Product"
    })
  }   


  return (
    <form className="login_form" onSubmit={submit}>
      <div className="login_box">
        <span><img src={logicon} alt="" /></span>
        <input type="text" placeholder="Username" 
          value={username}
          onChange={usernameFunction}
          required
          />
      </div>
      <div className="login_box">
        <span><img src={passicon} alt="" /></span>
        <input type="password" placeholder="Password"
          value={password}
          onChange={passwordFunction}
          required
        />
      </div>

      <input type="submit" value="Login" 
        className="btn_submit"
      />
      
      <div className="text">or</div>
      <a href="###">Create account</a>
    </form>
  );
}
