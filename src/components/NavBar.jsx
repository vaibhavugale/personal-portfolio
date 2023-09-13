import React from 'react'
import { data } from '../data'
import { Link } from 'react-router-dom'

const NavBar = () => {
  function handelScroll(name){

  }
  return (
    <section className=' flex justify-center items-center shadow-2xl h-[50px] w-full'>
        <nav className=' flex justify-between w-[1080px]  mx-auto  px-4 '>
            {/* // image */}
            <div>logo</div>

            {/* // project about contact skills  */}
            <div className=' flex gap-3' >

             {
                data?.map((item,index) => (
                  
                    <Link  onClick={()=> handelScroll(item?.name)} key={index}>
                    {item?.name}
                   </Link>
                ))
             }

            </div>
        </nav>
    </section>
  )
}

export default NavBar