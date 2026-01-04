import React from 'react'

const CustomButton = ({text, onClick}) => {
  return (
    <button className='bg-red-600 text-white rounded 
    px-8 py-2 text-lg hover:bg-red-400 cursor-pointer'
    onClick={onClick}>
        {text}
    </button>
  )
}

export default CustomButton