import React from 'react'

const Lists = (props) => {

    const mem = props.members

  return (
    <div key={mem.id} className='flex items-center'>
      <img src={mem.image} alt="" className='w-32 h-32 object-cover rounded-full p-4'/>
      <div className='p-4'>
        <h1 className='font-bold'>{mem.name}</h1>
        <h1>{mem.age} years</h1>
      </div>  
    </div>
  )
}

export default Lists
