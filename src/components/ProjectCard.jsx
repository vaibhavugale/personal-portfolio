import React from 'react'

import { Link } from 'react-router-dom'


const ProjectCard = ({data}) => {
  return (
    <div  className=' mt-4 shadow-2xl overflow-y-scroll rounded-md w-[320px] min-h-[380px] mx-auto p-2 bg-white  hover:scale-90 transition-all duration-300 hover:bg-slate-200'>
      {/* {console.log(data?.Image)} */}
      <img src={data?.Image} alt='Project image' className=' w-[300px] mx-auto mt-2 rounded-sm' />

     

      <div className=' mt-2 flex gap-y-1 flex-col'> 
        <p className='   font-semibold'><span className=' font-extrabold'>{data?.name}</span></p>
 
        <p>{data?.description}</p>
     

         <div className=' flex  gap-y-0  gap-2 flex-wrap'>
           <h3 className=' font-semibold'> TecStack:</h3>
           
            
            {
               data?.TecStack?.map((tec)=>(<p className=' font-semibold'>{tec},</p>))
            }

         </div>


      </div>
    
    </div>
  )
}

export default ProjectCard