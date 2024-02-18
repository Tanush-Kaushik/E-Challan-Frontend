import React, { useState } from 'react'

export default function AdminPg() {

    const [video, setVideo] = useState([])
    const [uploaded, setUploaded] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData()
        for (let i in video) {
            formData.append("video", video[i])
        }

        let response = await fetch('http://localhost:5000/api/uploadVideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify({
                formData
            })
        })
    }

    return (
        <div className="bg-gray-900">
            <p className='text-gray-900'>.</p>
            <form class="max-w-lg mx-auto text-center" onSubmit={handleSubmit}>
                 <h1 class="mb-7 mt-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl text-white">Upload video <span class="text-blue-500">for speed analysis</span> on Ticket Tracer</h1>
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-700 border-gray-600 hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            {uploaded ? <p className='text-gray-400 text-5xl'><ion-icon name="cloud-done"></ion-icon></p> : <>
                                <svg class="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-400">MP4,MOV,AVI (MAX. xx resolution)</p></>}
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" onChange={(e) => {setVideo(e.target.value); setUploaded(true) }} />
                    </label>
                </div>  
                <div class="mt-3 text-md text-gray-300 mt-2" id="user_avatar_help">The uploaded video will be analysed for speed checking and if speed exceeds the speed limit then a ticket will be generated</div>
                <button type="submit" class="mt-7 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Upload</button>
            </form>
        </div>
    )
}
