import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'


function NotFound() {
  const navigate = useNavigate()
  
  return (
    <>
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <div className='w-screen flex justify-center items-center text-red-600 font-extrabold text-3xl'>
               Page Not Found
            </div>
            <div className='w-screen flex justify-center items-center mt-3'>
                <Button 
                onClick={() => navigate('/u/home')} 
                className='w-36 h-10 rounded-full bg-green-600 hover:bg-green-800 text-white'  
                >
                    Go to Home
                </Button>
            </div>
        </div>
    </>
  )
}

export default NotFound