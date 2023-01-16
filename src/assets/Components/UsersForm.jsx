import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, userSelected, selectUser}) => {
  const {handleSubmit, register, reset} = useForm()

  const emptyUser = {email:"" , password:"" , first_name:"", last_name:"", birthday:""}

  useEffect(() => {
    if(userSelected){
      reset(userSelected)
    }else{
      reset(emptyUser)
    }
  },[userSelected])

  const submit = (data) => {
    console.log(data);

    if(userSelected){
      axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`,data)
      .then(() =>{
            getUsers()
            selectUser(null)
      } )
    }else{
      axios.post('https://users-crud.academlo.tech/users/',data)
    .then(() =>{
      getUsers()
      reset(emptyUser)
    } )
    }
  }


  const [isVisible, setisVisible] = useState(false)

  const changeVisible = () => {
    setisVisible(!isVisible)
  }
 

  return (
<form onSubmit={handleSubmit(submit)}>   
  <h1>Register <i className="fa-solid fa-address-card"></i></h1>

  <div className='form-container'> 
    <div className="input-container">
      <label htmlFor="first_name"><i className="fa-solid fa-user"></i> First Name</label>
      <input 
          type="text" 
          id='first_name'    
          {...register("first_name")}    
      />
    </div>

    <div className="input-container">
      <label htmlFor="last_name"><i className="fa-solid fa-user"></i> Last Name</label>
      <input 
          type="text" 
          id='last_name'    
          {...register("last_name")}    
      />
    </div>

  
    <div className="input-container">
      <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email</label>
      <input 
          type="text" 
          id='email'    
          {...register("email")}    
      />
    </div>


    <div className="input-container-password">
      <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
      <div className='btn-container'>
      <input 
          type={isVisible ? "text" : "password"} 
          id='password'    
          {...register("password")}    
      /> 
      <button onClick={changeVisible}><i className="fa-solid fa-eye-slash"></i></button>
    </div>
    </div>
    
    <div className="input-container">
      <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i> Birthday</label>
      <input 
          type="date" 
          id='birthday'    
          {...register("birthday")}    
      />
    </div>

    

    <button><i className="fa-solid fa-address-card"></i> Submit </button>
 </div>   
  </form>
  );
};

export default UsersForm;