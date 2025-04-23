import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Newsletter = () => {

  const [email, setEmail] = useState('');

  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email)){
      setSubmited(true)
      return toast.success("You’re subscribed! Check your inbox for updates." , {position: 'bottom-right'});
      
    }

    return toast.error("Please enter a valid email address." , {position: 'bottom-right'})


  }

  return (
    <div className="pt-16 px-4 border-[1px] border-[#EFEDEB] w-full max-w-[640px] min-h-[80dvh]">
      <h2 className="font-extrabold text-[32px] text-[#34302D] mb-3">Newsletter</h2>
      <p className=' text-[18px] text-[#4A4846] my-8'>Want to stay updated on my latest articles, coding tutorials, and personal adventures? Sign up for my newsletter! It’s a simple way to keep track of new posts and occasional coding tips I discover. Just drop your email in the sign-up box, and I’ll send you updates whenever there’s something new to share.</p>
      <p className='text-[20px] font-semibold leading-[130%] text-[#34302D] mb-6'>I’d love to have you along for the ride and also hear about your own journey!</p>

      <form className=' flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor="" className=' text-lg text-[#34302D]'>Email Address</label>
        <input 
          className={`text-lg text-[#34302D] hover:bg-[#EFEDEB] px-4 py-3 h-[51px] my-1 border-2 ${!submited ? "border-[#DEDCDA]" : "border-[#008531]" } rounded-[10px]  outline-[#5792C0] focus:outline-2 cursor-pointer`} 
          type="email" 
          placeholder='email@example.com'
          value={ email }
          onChange={ (e) => setEmail( e.target.value ) }
          required
          />
        <button 
          className={`${!submited ? "bg-[#93CEFC] hover:bg-[#75B0DE] cursor-pointer" : "bg-[#DEDCDA] cursor-not-allowed"}  w-[158px] h-[51px]  rounded-[10px] text-lg text-[#1C1A19] font-medium my-2  outline-[#5792C0] outline-offset-2 focus:outline-2`}
          disabled={submited}
          >Stay updated</button>
      </form>

      <span className=' text-[16px] text-[#4A4846]'>Unsubscribe anytime. No spam, I promise 🙂</span>

    </div>
  )
}

export default Newsletter