import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import notify from '../useNotifaction';
import { loginUser } from '../../../redux/actions/authAction';

const LoginHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState()
    const [isPress, setIsPress] = useState(false)
 
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await dispatch(loginUser({
            email,
            password
        }))

        setLoading(false)
       
    }
    const res = useSelector(state => state.authReducer.loginUser)
    useEffect(() => {
        if (loading === false) {
            if (res) {
               
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    notify("تم تسجيل الدخول بنجاح", "success")
                    if(res?.data?.data?.role){
                        if(res.data.data?.role == "admin"){
                            window.location.pathname="/admin/allorders"
                        } if (res.data.data?.role == "user") {
                            window.location.pathname="/userpage"
                        } else {
                            window.location.pathname="/"
                        }
                        
                    }
                
                   
                  
                } else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }

                if (res.data.message === "Incorrect email or password") {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    notify("كلمة السر او الايميل خطا", "error")
                }
                setLoading(true)
            }
        }
    }, [loading])

    return [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress]
}

export default LoginHook