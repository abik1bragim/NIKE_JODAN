import React from 'react'
import './Main3.css'
function Main3() {
    return (
        <div className='w-full h-[710px] flex flex-col justify-center items-center mt-[40px]'>
            <h1 className='text-[27px] ml-[-1115px]'>Trending Now</h1>
            <div className='w-[95%] h-[100%] flex justify-between mt-[20px]'>
                <div className="img1">
                    <h1 className='text-[25px] text-[#fff] mt-[500px] ml-[50px] font-medium'>National Team Fan Gear Collactions</h1>
                    <button className='w-[100px] h-[40px] bg-white rounded-[20px] mt-[20px] ml-[50px]'>Shop</button>
                </div>
                <div className="img2">
                    <h1 className='text-[25px] mt-[500px] ml-[50px] font-medium'>New from Nike Basketball</h1>
                    <button className='w-[100px] h-[40px] bg-black text-white rounded-[20px]  mt-[20px] ml-[50px]'>Shop</button>
                </div>
            </div>
        </div>
    )
}

export default Main3