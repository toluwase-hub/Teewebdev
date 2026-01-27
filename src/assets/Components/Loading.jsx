import React, { useEffect, useState } from 'react'

const Loading = () => {

    const [IsLoading, setIsLoading] = useState(true)

    useEffect( ()=> {
       const HandleLoading = ()=>{
        setIsLoading(false)
       }


       window.addEventListener('load', HandleLoading);

       return ()=> {
        window.removeEventListener('load', HandleLoading);
       }

       
       
    },[])
    const HandleReload = ()=> {
            window.location.reload()
       }

  return (
    <div className={` bg-black/50  fixed top-0 h-screen w-screen z-50 flex  justify-center items-center ${IsLoading ? "block" : "hidden"} `}>


    <div  className='text-white flex  flex-col justify-center items-center gap-3'>
        <div className='w-10 h-10 border-5 border-[#D4a] rounded-full border-t-transparent animate-spin'></div>
        <div className='flex flex-col gap-3 font-light text-xs'>
            Taking too long?
            <button onClick={HandleReload} className='bg-[#D4A] text-white py-2 px-2 rounded-lg flex items-center justify-center gap-1 '><div>Refresh</div> <div className='border w-2 h-2  rounded-full border-t-transparent animate-spin'></div></button>
        </div>
    </div>
    </div>
  )
}

export default Loading