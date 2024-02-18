import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    let navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()  

        let response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:emailRef.current.value,
                password:passwordRef.current.value
            })
        })

        let res= await response.json()

        if(res.success==true){
          //
            navigate('/admin')
        }
    }

    return (
        <div className='bg-gray-900'>
            <p className='text-gray-900'>.</p>
            <form class="max-w-sm mx-12 mt-5 text-lg" onSubmit={handleSubmit}>
            <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-5xl text-white">Welcome back to <mark class="px-2 text-white  rounded bg-blue-500">Ticket Tracer</mark></h1>
            <p class="mb-5 text-lg font-normal lg:text-xl text-gray-400">Verify your details</p>                  
                <div class="mb-5">
                    <label for="email" class="block mb-2  font-medium text-white">Your email</label>
                    <input ref={emailRef} type="email" id="email" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="john@gmail.com" required />
                </div> 
                <div class="mb-5">
                    <label for="password" class="block mb-2  font-medium text-white">Your password</label>
                    <input ref={passwordRef} type="password" id="password" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" required />
                </div>
                <button type="submit" class="mb-5 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Login to your account</button>
            </form>
        </div>
    ) 
}
