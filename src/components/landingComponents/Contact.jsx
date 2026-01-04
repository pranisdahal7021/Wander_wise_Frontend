import React, { useState } from 'react'
import CustomButton from '../common/CustomButton'

const Contact = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log("Submitted email:", email);}
        
  return (
    <section className='bg-black text-white h-90'>

    <div className='px-80 py-20 space-y-8'>
        <h2 className='text-4xl font-bold text-center mb-4'>Contact Us</h2>
        <p className='text-center text-xl'>We'd love to hear from you! 
            Whether you have questions, feedback, or need assistance, our team is here to help.</p>

        <div className='flex items-center gap-4'>
            <input type="email" className='px-10 py-2 border 
            border-black-400 rounded-md w-full bg-white 
           text-black' placeholder="Enter your Email" 
           value={email}
            onChange={
                (e) => setEmail(e.target.value)
                } />

            <CustomButton text="Submit" onClick={handleSubmit}/>
        </div>
    </div>
    </section>
  )
}

export default Contact