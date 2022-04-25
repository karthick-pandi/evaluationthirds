import {useContext,useState} from "react";
import {AuthContext} from "./AuthContext";
import axios from "axios";
import { useNavigate} from "react-router-dom"


export const Login = () => {
  //  use reqres to log user in.
  const navigate=useNavigate()
  const [userN,setUserN]=useState("");
  const [userP,SetUserP]=useState("");
  console.log(userN,userP);
  const {AuthSt,toggleAuthSt}=useContext(AuthContext)
  const userLog=(e)=>{
    e.prevevDefault();
    axios.post('https://reqres.in/api/login',{
      email:userN,
      password:userP
  })
    .then(function(response){
      console.log(response.data);
      toggleAuthSt()
      navigate("/")
    })
    .catch(function(error){
      console.log(error);
    });
  }


  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={(e)=>{
          setUserN(e.target.value)
        }}onBlur={(e)=>{
          setUserN(e.target.value)
        }}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={(e)=>{
          SetUserP(e.target.value)
        }}onBlur={(e)=>{
          SetUserP(e.target.value)
        }}
      />
      <input type="submit" value="SIGN IN" onClick={userLog} className="login_submit" />
    </form>
  );
};