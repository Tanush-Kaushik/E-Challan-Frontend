import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const spass = useRef()
    const [correct, setCorrect] = useState(true)
    const [agree,setAgree] = useState(false)
    let navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()  

        if(!agree) return;
        if (passwordRef.current.value != spass.current.value) {
            return setCorrect(false)
        }
        else setCorrect(true)

        let response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:nameRef.current.value,
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
            <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-5xl text-white">New to <mark class="px-2 text-white  rounded bg-blue-500">Ticket Tracer</mark></h1>
            <p class="mb-5 text-lg font-normal lg:text-xl text-gray-400">Please provide us your details</p>    
                <div class="mb-5">
                    <label for="name" class="block mb-2  font-medium text-white">Your name</label>
                    <input ref={nameRef} type="name" id="name" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="John Doe" required />
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2  font-medium text-white">Your email</label>
                    <input ref={emailRef} type="email" id="email" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="john@gmail.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2  font-medium text-white">Your password</label>
                    <input ref={passwordRef} type="password" id="password" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" required />
                </div>
                {correct ? <div class="mb-5">
                    <label for="repeat-password" class="block mb-2  font-medium text-white">Repeat password</label>
                    <input ref={spass} type="password" id="repeat-password" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" required />
                </div> :
                    <div class="mb-5">
                        <label for="error" class="block mb-2 font-medium text-red-500">Repeat password</label>
                        <input ref={spass} type="text" id="error" class="border  placeholder-red-700 text-sm rounded-lg focus:ring-red-500 bg-gray-700 focus:border-red-500 block w-full p-2.5 text-red-500 placeholder-red-500 border-red-500" />
                        <p class="mt-2 text-sm text-red-500 font-medium">Password doesn't match</p>
                    </div>}
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3  bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800" required onClick={()=>setAgree(!agree)}/>
                    </div>
                    <label for="terms" class="ms-2 text-sm font-medium text-gray-300 text-center">I agree with the <a href="#" class=" hover:underline text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" class="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Register new account</button>
            </form>
        </div>
    ) 
}
