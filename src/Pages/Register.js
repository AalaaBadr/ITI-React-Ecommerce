import { useState } from "react";
import RegisterForm from "../components/Forms/RegisterForm";
import { addUser } from "../store/slices/users"
import { useDispatch } from "react-redux"

export default function Register() {
  const dispatch = useDispatch();

  const [userForm, setUserForm] = useState({
    id:new Date().getTime(),
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormError, setUserFormErrors] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });

  const handleInputChange = (e) => {

    if (e.target.name === "name") {
      setUserForm({
        ...userForm,
        name: e.target.value,
      });

      setUserFormErrors({
        ...userFormError,
        name:
          e.target.value.length === 0 ? 
            "This field is required"
          : e.target.value.length < 3 ? 
            "Minmum Name length is 3"
          : null,
      });
    }

    if (e.target.name === "email") {
      setUserForm({
        ...userForm,
        email: e.target.value,
      });

      setUserFormErrors({
        ...userFormError,
        email:
          e.target.value.length === 0 ? 
            "This field is required"
          : ! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value) ?
            "Expected Email expression (email2@example)"
          : null,
      });
    }

    if (e.target.name === "userName") {
      setUserForm({
        ...userForm,
        userName: e.target.value,
      });

      setUserFormErrors({
        ...userFormError,
        userName:
          e.target.value.length === 0 ? 
            "This field is required"
          : /\s/.test(e.target.value ) ? 
            "User Name can't contain white spaces"
          : null,
      });
    }

    if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });

      setUserFormErrors({
        ...userFormError,
        password:
          e.target.value.length === 0 ? 
            "This field is required"
          : ! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value) ?
            "Password must be at least 8 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji"
          : null,
      });
    }

    if (e.target.name === "confirmPassword") {
      setUserForm({
        ...userForm,
        confirmPassword: e.target.value,
      });

      setUserFormErrors({
        ...userFormError,
        confirmPassword:
          e.target.value.length === 0 ? 
            "This field is required"
          : e.target.value !== userForm.password ? 
            "Doesn't match password"
          : null,
      });
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userForm))
    console.log(userForm);
  };

  return (
    <>
    <h2>Register</h2>
    <hr/>

    <RegisterForm 
    userForm = {userForm}
    userFormError = {userFormError}
    handleInputChange = {(e)=>handleInputChange(e)}
    handleSubmit = {(e)=> handleSubmit(e)}
    />
    </>
  );
}