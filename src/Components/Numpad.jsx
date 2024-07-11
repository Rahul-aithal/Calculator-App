import React, { useEffect, useState } from 'react'

function Numpad({
  giveString,
  // clear
}) {
const [value, setValue] = useState('')
const [clear, setClear] = useState(false)
useEffect(()=>{
  console.log(value);
giveString(value);
setClear(false)
},[value])

useEffect(()=>{
  if(clear){
  setValue('')}
},[clear])

  return (
    <div className='flex flex-col gap-3 justify-start items-center h-96  m-5  '>
        <div className="flex items-center justify-evenly gap-5 p-2 bg-black shadow-sm " id="operators ">
            <div className="bg-lime-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer "onClick={()=>{setValue((prev)=>(prev+'+'))}}>+</div>
            <div className="bg-lime-200 mx-1 p-2 text-center w-10 font-extrabold  text-xl cursor-pointer "onClick={()=>{setValue((prev)=>(prev+'-'))}}>-</div>
            <div className="bg-lime-200 mx-1 p-2 text-center w-10 font-extrabold  text-xl cursor-pointer  "onClick={()=>{setValue((prev)=>(prev+'*'))}}>*</div>
            <div className="bg-lime-200 mx-1 p-2 text-center w-10 font-extrabold  text-xl cursor-pointer "onClick={()=>{setValue((prev)=>(prev+'/'))}}>/</div>
        </div>
        <div className='grid grid-cols-3 gap-4 bg-gray-700 p-5'>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'1'))}}>
            1
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'2'))}}>
            2
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'3'))}}>
            3
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'4'))}}>
            4
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'5'))}}>
            5
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'6'))}}>
            6
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'7'))}}>
            7
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'8'))}}>
            8
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'9'))}}>
            9
          </div>

          <div className=" bg-blue-500  text-xl text-rose-200 m-2 p-3 rounded w-18   mx-1  text-center font-  cursor-pointer " onClick={()=>{setClear(true)}}>
            Clear
          </div>
          <div className="bg-slate-200 mx-1 p-2 text-center w-10  font-extrabold text-xl cursor-pointer " onClick={()=>{setValue((prev)=>(prev+'0'))}}>
            0
          </div>
          <div className="bg-slate-200 mx-1 text-center  w-10 font-extrabold text-xl cursor-pointer " onClick={()=>{setValue(value.slice(0, -1))}}>
            del
          </div>
        </div>

    </div>
  )
}

export default Numpad