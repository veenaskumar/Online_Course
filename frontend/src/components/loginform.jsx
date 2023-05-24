import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {IoMdContact} from 'react-icons/io'
// import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { date } from 'joi'
import Signup from '../pages/signup'
function Loginform() {
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const[data,setdata]=useState('')
    const navigate=useNavigate();
    function handleSubmit(){


        const info={
            name:name,
            password:password,
        }

        fetch('http://localhost:3002/api/auth/login', {
           method: 'POST',
           body: JSON.stringify(info),
           headers: {
              "Content-Type": "application/json",
           },
        })
           .then((res) => res.json())
           .then((res)=>{
            setdata(res)
            console.log(res.message)
            if(res.message==='Success'){
            navigate('/home')
            // console.log('hi')
        }
    })
     }
  return (
   
     <div className='flex flex-col justify-evenly gap-[1rem]  py-[90px] max-w-[800px]'>
            {/* <p className='text-slate-500 tracking-normal font-semibold ' id='pick_up'>START A NEW PATH</p> */}
            <h1 className='text-2xl font-bold'>Welcome Back</h1><br />
            {/* <p className='text-[13px] font-light'>Already A Member? <span className='text-sky-600 text-[13px] cursor-pointer'>Log In</span></p> */}
            <form>  
            <div className='flex flex-col justify-evenly gap-[2rem]'>
                <div className='flex gap-[2rem]'>
                   
                    <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px] w-[460px]'>
                    <input type='text' name='fname' placeholder='First Name' id='fname' className=' w-[460px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' value={name} onChange={(e)=>{setname(e.target.value)}} />
                    <IoMdContact />
                
                
                    </div>
                
                {/* <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px]  '>
                    <input type='text' name='lname' placeholder='Last Name' id='lname ' className=' placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <IoMdContact />
                </div> */}
                </div>
                
                {/* <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]'>
                    <input type="email" name="email" id="email" placeholder='Email' className='w-[492px]  placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <AiOutlineMail />
                </div> */}
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[460px] py-[10px] px-[10px]'>
                    <input type="password" name="password" id="password" placeholder='Password' className=' w-[460px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    <RiLockPasswordLine />
                </div>
                {/* <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]    '>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' className='w-[492px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <RiLockPasswordFill />
                </div> */}  
                {
                     <p>{data.message}</p>
                }
                
                <div className='border w-[200px] text-center rounded-full py-[8px] bg-sky-600 hover:bg-sky-900 text-white font-bold'>
                    <input type='button' value="Login" className='cursor-pointer' onClick={()=> handleSubmit()}/>
                </div>
                <div className='text-[13px] font-light flex gap-[0.3rem] decoration-none'>Don't You are a member 
                <Link to ="/signup" className='text-sky-600 text-[13px] cursor-pointer'>Sign Up</Link>
                </div>

                {/* <div>{name}</div> */}

            </div>
            </form>
           

        </div>
        
   
  )
}

export default Loginform