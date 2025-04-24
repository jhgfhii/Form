import React from 'react'

export const Secondform = () => {
  return (
    <div className='ml-80 mt-10 '>
        <div className='border-2 w-190 h-280 mt-10 ml-10 shadow-2xl border-white shadow-blue-400'>
        
            <div className='text-3xl font-bold text-green-400 ml-80 mt-10 mb-10'>
             Form in React
            </div>
            <div className='ml-5'>
            <div className='text-2xl font-semibold mb-2'>
                <p>First Name*</p>
                <form>
                    <input type='text' placeholder='Enter first Name' className='border-2 w-180 h-8'/>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Last Name*</p>
                <form>
                    <input type='text' placeholder='Enter last Name' className='border-2 w-180 h-8'/>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Email id*</p>
                <form>
                    <input type='email' placeholder='Enter email id' className='border-2 w-180 h-8'/>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Contact*</p>
                <form>
                    <input type='number' placeholder='Enter phone no.' className='border-2 w-180 h-8'/>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Gender*</p>
                <form className='ml-45'>
                <label className="text-xl ml-2">
            <input
              type="radio"
              name="language"
              value="male"
            />
            Male
          </label>
          <label className="text-xl ml-20">
            <input
              type="radio"
              name="language"
              value="female"
            />
            Female
          </label>
          <label className="text-xl ml-20">
            <input
              type="radio"
              name="language"
              value="other"
            />
            Other
          </label>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Your best Subject</p>
                <form className='ml-45'>
                <label className="text-xl ml-2">
            <input
              type="checkbox"
              name="language"
              value="english"
            />
            English
          </label>
          <label className="text-xl ml-20">
            <input
              type="checkbox"
              name="language"
              value="math"
            />
            Math
          </label>
          <label className="text-xl ml-20">
            <input
              type="checkbox"
              name="language"
              value="physics"
            />
            Physics
          </label>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Upload Resume</p>
                <form>
                    <input type='file' placeholder='' className='border-2 w-180 h-8'/>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Enter URL*</p>
                <form>
                    <input type='url' placeholder='Enter url' className='border-2 w-180 h-8'/>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>Select your choice</p>
                <form>
                    <input type='' placeholder='Select your ans' className='border-2 w-180 h-8 bg-[#454547]'/>
                </form>
            </div>
            <div className='text-2xl font-semibold mb-2'>
                <p>About</p>
                <form>
                    <input type='text' placeholder='About your self' className='border-2 w-180 h-40 placeholder:align-text-top'/>
                </form>
            </div> 
            <div className='text-xl font-semibold'>
                <p>Submit or Reset</p>
            </div> 
            <div className='flex flex-wrap'>
            <input
              type="reset"
              className="border-2 mt-15  bg-green-400 text-white w-50 h-15 ml-10 rounded-2xl hover:bg-blue-500"
            />
            <input
              type="submit"
              className="border-2 -mt-15  bg-green-400 text-white w-50 h-15 ml-100 rounded-2xl hover:bg-blue-500"
            />
            </div>
        </div>
    </div>
</div>
  )
}
