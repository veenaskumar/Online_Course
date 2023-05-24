import React from 'react'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {RiLockPasswordFill} from 'react-icons/ri'
// import SideImage from '../assets/learn_online.jpg'

function Signupform() {
    return (
            <div className='flex flex-col justify-evenly gap-[1rem]  py-[30px] max-w-[800px]'>
            <p className='text-slate-500 tracking-normal font-semibold ' id='pick_up'>START A NEW PATH</p>
            <h1 className='text-2xl font-bold'>Create new account</h1>
            <p className='text-[13px] font-light'>Already A Member? <span className='text-sky-600 text-[13px] cursor-pointer'>Log In</span></p>
            <form>  
            <div className='flex flex-col justify-evenly gap-[2rem]'>
                <div className='flex gap-[2rem]'>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px]'>
                    <input type='text' name='fname' placeholder='First Name' id='fname' className=' placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <IoMdContact />
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px]  '>
                    <input type='text' name='lname' placeholder='Last Name' id='lname ' className=' placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <IoMdContact />
                </div>
                </div>
                
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]'>
                    <input type="email" name="email" id="email" placeholder='Email' className='w-[492px]  placeholder:text-[15px] placeholder:indent-[10px] font-semibold'/>
                    <AiOutlineMail />
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]'>
                    <input type="password" name="password" id="password" placeholder='Password' className='w-[492px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold'/>
                    <RiLockPasswordLine />
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]    '>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' className='w-[492px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <RiLockPasswordFill />
                </div>
                <div className='border w-[200px] text-center rounded-full py-[8px] bg-sky-600 hover:bg-sky-900 text-white font-bold'>
                    <input type="submit" value="Create account" className='cursor-pointer'/>
                </div>

            </div>
            </form>
           

        </div>
        
       
        
    )
}

export default Signupform