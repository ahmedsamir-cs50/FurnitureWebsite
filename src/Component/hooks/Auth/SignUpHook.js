import React, { useEffect, useState } from 'react'
import notify from '../useNotifaction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewUser } from '../../../redux/actions/authAction'

const SignUpHook = () => {
    const [user,setUser]=useState("")
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [ConfirmPassword,setConfirmPassword]=useState("")
    const [Phone,setPhone]=useState("")
    const [Loading,setLoading]=useState("")
    const Dispatch=useDispatch();
    const navigate=useNavigate();
    const HandleUserChange =(e)=>{
      setUser(e.target.value)
    }
    const HandleEmailChange =(e)=>{
      setEmail(e.target.value)}
      const HandlePasswordChange =(e)=>{
        setPassword(e.target.value)}
      const HandleConfirmPasswordChange =(e)=>{
        setConfirmPassword(e.target.value)}
      const HandlePhoneChange =(e)=>{
        setPhone(e.target.value)}
        const validation =(Password,ConfirmPassword)=>{
            if(Password !==ConfirmPassword){
              return  notify("Re-Enter Password","warn")
            }
          const validateEmail = (Email) => {
            return String(Email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };
 
          validateEmail();
        
        }
        const HandleClick =async(e)=>{
e.preventDefault();
setLoading(true);
validation();
 await Dispatch(createNewUser({
    name:user ,
    email:Email,
    password:Password,
    passwordConfirm:ConfirmPassword,
    phone:Phone
}))
setLoading(false);
        }
        const res=useSelector(state=>state.authReducer.createUser)
        useEffect(() => {
            if (Loading === false) {
                if (res) {
                   
                    if (res.data.token) {
                        localStorage.setItem("token", res.data.token)
                        notify(" success   ", "success")
                        setTimeout(() => {
                            navigate('/login')
                        }, 2000);
                    }
    
                    if (res.data.errors) {
                        if (res.data.errors[0].msg === "E-mail already in use")
                            notify(" E-mail already in use  ", "error")
                    }
                    if (res.data.errors) {
                        if (res.data.errors[0].msg === "accept only egypt phone numbers")
                            notify("Enter Correct Number", "error")
                    }
    
                    if (res.data.errors) {
                        if (res.data.errors[0].msg === "must be at least 6 chars")
                            notify("Password at least 6 Numbers or char", "error")
                    }
    
    
                }
            }
        }, [Loading])
    return [HandleUserChange,HandleEmailChange,HandlePasswordChange,HandleConfirmPasswordChange,HandlePhoneChange,HandleClick]    
}

export default SignUpHook
