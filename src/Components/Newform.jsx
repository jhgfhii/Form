
import React, { useState } from "react";

const Newform = () =>{
//     const[name, setName]=useState("")
//     const[phone, setPhone]=useState("")
//     const[email, setEmail]=useState("")
//     const[country, setCountry]=useState("")

//     console.log(name,phone,email,country)

//     const Namehandler = (e)=>{
//          const value = e.target.value ;
//          setName(value);
//     }
//     const Phonehandler = (e)=>{
//         const value = e.target.value ;
//         setPhone(value);
//    } 
//    const Emailhandler = (e)=>{
//     const value = e.target.value ;
//     setEmail(value);
// }
// const Countryhandler = (e)=>{
//     const value = e.target.value ;
//     setCountry(value);
// }    

const [data,setData]=useState({name:"",phone:"",email:"",country:""})



const handlechange=(e)=>{

  const name=e.target.name
  const value=e.target.value


    setData((prev)=>({...prev,[name]:value}))








}



console.log(data.name)
console.log(data.phone)
console.log(data.email)
console.log(data.country)










  return (
    <div className='flex flex-justify shadow-amber-600 shadow-2xl center border-2 rounded-4xl w-200 h-160 ml-40 mt-20 bg-[#C6D6F2] border-[#C6D6F2]  '>

        <div className='border-2 w-180 h-140 ml-10 mt-10 rounded-3xl bg-blue-700 border-blue-700'>
            <div className=' mt-5 font-bold text-4xl text-[#C6D6F2] ml-35'>
                <div>
                    Already working together ?
                    <div className='mt-2 ml-10 font-normal text-xl text-white'>Log in to your account and connect with </div>
                    <div className='text-xl ml-35 font-normal'>your teamamtes!</div>
                    <form>
                        <input  name="name" onChange={handlechange} type='text' placeholder='Enter your name' className=' bg-blue-300 text-black border-2 w-120 h-15 rounded-4xl mt-10 ml- placeholder-[#C6D6F2] px-4 py-2 focus:outline-none'></input>
                        <button className="bg-white text-blue-500 rounded-full p-1.5 -ml-15 hover:bg-gray-200 transition">
    ➔
  </button>
                    </form>
                    <form>
                        <input name="phone" onChange={handlechange} type='number' placeholder='Enter your phone no.' className='bg-blue-300 text-black border-2 w-120 h-15 rounded-4xl mt-10 ml- placeholder-[#C6D6F2] px-4 py-2 focus:outline-none'></input>
                        <button className="bg-white text-blue-500 rounded-full p-1.5 -ml-15 hover:bg-gray-200 transition">
    ➔
  </button>
                    </form>
                    <form>
                        <input  name="email" onChange={handlechange} type='email' placeholder='Enter your email id.' className='bg-blue-300 text-black border-2 w-120 h-15 rounded-4xl mt-10 ml- placeholder-[#C6D6F2] px-4 py-2 focus:outline-none'></input>
                        <button className="bg-white text-blue-500 rounded-full p-1.5 -ml-15 hover:bg-gray-200 transition">
    ➔
  </button>
                    </form>
                    <form>
                        <input name="country" onChange={handlechange} type='text' placeholder='Enter your country' className='bg-blue-300 text-black border-2 w-120 h-15 rounded-4xl mt-10 ml- placeholder-[#C6D6F2] px-4 py-2 focus:outline-none'></input>
                        <button className="bg-white text-blue-500 rounded-full p-1.5 -ml-15 hover:bg-gray-200 transition">
    ➔
  </button>
                    </form>
                    <div className='flex flex-justify shadow-amber-600 shadow-2xl center border-2 rounded-4xl w-150 h-160 ml-180 -mt-140 bg-[#C6D6F2] border-[#C6D6F2]  '>
                    <div className="mt-5 ml-5">
                    <p className="text-black mb-5">Name: {data.name}</p>
                    <p className="text-black mb-5">Phone: {data.phone}</p>
                    <p className="text-black mb-5">Email: {data.email}</p>
                    <p className="text-black">Country: {data.country}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Newform;