import React from 'react'

const FeatureCards = ({title, description, icon: Icon}) => {
  return (
    <div className='border border-gray-400 rounded p-4'>
      <Icon className='w-10 h-10 text-red-600 my-4' />
        <h3 className='text-3xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
    </div>
  )}


export default FeatureCards

