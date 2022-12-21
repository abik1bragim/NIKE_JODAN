import React from 'react'
import Nike from '../image/nike.png'
import { BsSearch } from 'react-icons/bs'
import { SlHeart } from 'react-icons/sl'
import { BsBag } from 'react-icons/bs'

function Navbar2() {

    const style = {
        Nav2: 'w-full h-[60px] bg-[#fff] flex items-center',
        Ul2: 'w-[430px] h-[100%] flex items-center justify-between ml-[350px]',
        Li2: 'w-[150px] h-[100%] text-[16px] flex items-center justify-center border-white hover:border-black border-b-[2px]',
        Li2_2: 'w-[60px] h-[100%] text-[16px] flex items-center justify-center border-b-[2px] border-white hover:border-black',
        Li2_4: 'w-[60px] h-[100%] text-[16px] flex items-center justify-center border-white hover:border-b-black border-b-[2px]',
        Li2_3: 'w-[80px] h-[100%] text-[16px] flex items-center justify-center border-white hover:border-b-black border-b-[2px]',
        Li2_5: 'w-[60px] h-[100%] text-[16px] flex items-center justify-center border-white hover:border-b-black border-b-[2px]',
        Li2_6: 'w-[60px] h-[100%] text-[16px] flex items-center justify-center border-white hover:border-b-black border-b-[2px]',
        Search: 'w-[170px] h-[70%] flex items-center justify-center bg-[#f5f5f5] rounded-[20px] hover:bg-gray-200 overflow-hidden ml-[140px] group',
        i_search: 'p-[8px] text-[35px] rounded-full hover:bg-gray-200',
        Input: 'w-[90%] bg-[#f5f5f5] group-hover:bg-gray-200'
    }

    return (
        <div className={style.Nav2}>
            <a href="/">
                <img src={Nike} alt="" className='w-[65px] ml-[45px]' />
            </a>

            <ul className={style.Ul2}>
                <li className={style.Li2}>
                    <a href="/news">News & Featured</a>
                </li>
                <li className={style.Li2_2}>
                    <a href="/men">Men</a>
                </li>
                <li className={style.Li2_3}>
                    <a href="/women">Women</a>
                </li>
                <li className={style.Li2_4}>
                    <a href="/kids">Kids</a>
                </li>
                <li className={style.Li2_5}>
                    <a href="/sale">Sale</a>
                </li>
                <li className={style.Li2_6}>
                    <a href="gifts">Gifts</a>
                </li>
            </ul>
            <div className={style.Search}>
                <BsSearch className={style.i_search} />
                <input type="text" placeholder='Search' className={style.Input} />
            </div>

            <SlHeart className='text-[20px] ml-[25px]' />
            <BsBag className='text-[20px] ml-[20px]' />
        </div>
    )
}

export default Navbar2