import React from 'react'
import { useState } from 'react'
import './App.css'
import Personlists from './api/data'
import Lists from './Components/Lists'

function App() {
  
  const [persons,setPersons] = useState(Personlists)
  const [birthdays,setBirthdays] = useState(5)


  const remove=()=>{
    setPersons([])
    setBirthdays(0)
    
  }

  

  return (
    <div className='bg-pink-600 w-10]'>
      <div className='bg-white mx-96 my-40'>
        <h1 className='font-bold text-4xl'>{birthdays} birthdays today</h1>
        <div className='flex flex-col gap-5'>{persons.map((mem)=>{return(<Lists members = {mem}/>)})}</div>
        <button onClick={remove} className='bg-pink-600 text-white h-16 w-36 m-3'>Remove</button>
      </div>
    </div>
  )
}

export default App
