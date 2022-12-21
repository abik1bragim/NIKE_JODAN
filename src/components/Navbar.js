import React from 'react'
import Jordan from '../image/jordan.png'
import Converse from '../image/converse.png'
function Navbar() {

    const style = {
        Nav: 'w-full h-[35px] bg-[#F5F5F5] flex items-center justify-between px-[50px]',
        Ul: 'w-[250px] h-[100%] flex items-center justify-between'
    }

    return (
        <nav className={style.Nav}>
            <a href="/jordan">
                <img src={Jordan} alt="" className='w-[20px]' />
            </a>
            <a href="/converse">
                <img src={Converse} alt="" className='w-[36px] mr-[905px]' />
            </a>

            <ul className={style.Ul}>
                <li className='text-[13px]'>
                    <a href="/find">Find a Store</a>
                </li>
                <li className='text-[13px]'>|</li>
                <li className='text-[13px]'>
                    <a href="/help">Help</a>
                </li>
                <li className='text-[13px]'>|</li>
                <li className='text-[13px]'>
                    <a href="/joinus">Join Us</a>
                </li>
                <li className='text-[13px]'>|</li>
                <li className='text-[13px]'>
                    <a href="/signin">Sign In</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar