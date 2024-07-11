import React, { useEffect, useState } from 'react'

function Display({
  res=0,
  curr=0,
  
}) 
{
  const [answer, setAnswer] = useState(0)
  const[current,setCurrent]= useState('')
  useEffect(() => {
  if(!isNaN(res)){
    console.log('res From display',res);
   setAnswer(res)}

  }, [res])

  useEffect(()=>{
    
      console.log("Current from display",curr);
      setCurrent(curr)
   
  },[curr])
  return (
    <div className='grid place-items-center '>
    <div className=' flex flex-col gap-3 w-full items-center justify-center h-32'>
<input 
type="text"
 value={current} 
className='bg-slate-400 p-2 sm:p-4 sm:font-bold sm:text-xl text-slate-50 w-80 sm:w-96'   maxLength={100}/>
<input 
type="text"
 value={answer} 
className='bg-red-400 p-2 sm:p-4 sm:font-bold sm:text-xl text-slate-50 w-80 sm:w-96'  
disabled
 maxLength={100}/>
 
    </div>

    </div>  )
}

export default Display