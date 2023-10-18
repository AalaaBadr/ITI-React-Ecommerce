import { useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import LogInForm from "../components/Forms/LogInForm";

export default function LogIn() {
  const navigate = useNavigate();

  const users = useSelector(state => state.users.users)

  const [error, setError] = useState("");

  const [userForm, setUserForm] = useState({
    email: "",
    password: ""
  });
  
  const handleInputChange = (e) => {

    if (e.target.name === "email") {
      setUserForm({
        ...userForm,
        email: e.target.value,
      });
    }

    if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
    for (let x = 0 ; x < users.length ; x++) {
      console.log(users[x])
      if ( userForm.email == users[x].email ) {
        if ( userForm.password == users[x].password ) {
          navigate("/")
        }

        else {
          setError("The password provided for this email is wrong")
        }
       
      }
      else {
        setError("No such Email is found for a user")
      }
    }
  };

  return (
    <>
    <h2>Log In</h2>
    <hr/>

    <LogInForm 
    error = {error}
    userForm = {userForm}
    handleInputChange = {(e)=>handleInputChange(e)}
    handleSubmit = {(e)=> handleSubmit(e)}
    />
    </>
  );
}