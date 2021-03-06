import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import { Alert } from './'
import { LoadingIcon, signup } from '../assets'

const cookies = new Cookies()

const initialState = {
    fullName: '',
    username: '',
    phoneNumber: '',
    avatarURL: '',
    password: '',
    confirmPassword: '',
}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)
    const [form, setForm] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        
        setLoading(true)
        const { username, phoneNumber, avatarURL, password} = form
        
        const URL = import.meta.env.VITE_CHAT_SERVER

        try {
            const {data: { token, userId, hashedPassword, fullName }} = await axios.post(`${URL}/${isSignup ? 'signup':'login'}`, {
                fullName: form.fullName, username, phoneNumber, avatarURL, password
            })
    
            cookies.set('token', token)
            cookies.set('username', username)
            cookies.set('fullName', fullName)
            cookies.set('userId', userId)
    
            if(isSignup) {
                cookies.set('phoneNumber', phoneNumber)
                cookies.set('avatarURL', avatarURL)
                cookies.set('hashedPassword', hashedPassword)
            }
            
            window.location.reload()
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    const clearError = () => setError(null)
    
  return (
    <>
    {error && <Alert type='error' message={error} onClear={clearError} />}
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="fullName">FullName</label>
                            <input type="text" name='fullName' onChange={handleChange} placeholder='Full Name' required />
                        </div>
                    )}

                    <div className="auth__form-container_fields-content_input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' onChange={handleChange} placeholder='Username' required />
                    </div>

                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" name='phoneNumber' onChange={handleChange} placeholder='+234 123 4567 890' required />
                        </div>
                    )}

                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="avatarURL">Avatar URL</label>
                            <input type="text" name='avatarURL' onChange={handleChange} placeholder='Avatar URL' required />
                        </div>
                    )}

                    <div className="auth__form-container_fields-content_input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onChange={handleChange} placeholder='Password' required />
                    </div>

                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' required />
                        </div>
                    )}

                    <div className="auth__form-container_fields-content_button">
                        <button type='submit'>
                            {loading ?
                             (<LoadingIcon />) : 
                             `${isSignup ? 'Sign Up' : 'Sign In'}`
                             }
                        </button>
                    </div>
                </form>
                <div className="auth__form-container_fields-account">
                    <p>{isSignup ?
                    'Already have an account?' :
                     "Don't have an account?"}
                    </p>
                    <span onClick={switchMode}>
                        {isSignup ? 'Sign In' : 'Sign Up'}
                    </span>
                </div>
            </div>
        </div>
        <div className="auth__form-container_image">
            <img src={signup} alt="signup image" />
        </div>
    </div>
    </>
  )
}

export default Auth