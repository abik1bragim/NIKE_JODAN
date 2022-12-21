import React from 'react'
import M_nike from '../image/nike-just.jpg'
function Main() {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <img src={M_nike} alt="" className='w-[93%] h-[100%] object-cover' />
        </div>
    )
}

export default Main