import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Description from '../pages/description'



function addProduct(){
  const [ValueM,SetValueM]=useState(' Nothing')

  useEffect(()=>{
  SetValueM('hdi')
  },[])

  // function h(){
  //   ValueM ==='NOTHING' ? SetValueM('WHOO') : SetValueM('helloo')
  // }
    return(
        <>




<div className='bg-white grid grid-cols-3 gap-4 max-w-7xl mx-auto my-6  ' >
                <div className="col-span-5  ">
                  <h1 className=' py-4 text-left mx-2  text-2xl font-semibold col-span-3 border-b-2'>Get ready to sell online,Try these tips to get started  </h1>
                  <div className="mt-5 flex   bg-white   border-2 border-coolGray-300 border-solid rounded-md h-60">
                    <div className="flex w-full">

                      <div className="flex flex-col bg-gray-300 h-auto  w-2/5">
                        <div className="col-span-2 ">
                          <ul>
                            <li  className='px-7 mt-7'>

                              <h1> <Link href='/' >  Add Producs  </Link> </h1>
                            </li>
                            <li className='px-7 mt-7'>
                              <h1> <Link href='/'>  Customized Theme </Link> </h1>

                            </li>
                            <li className='px-7 mt-7'>

                              <h1> <Link  href='/'> Add Domain</Link></h1>
                            </li>

                          </ul>
                        </div>
                      </div>

                      <div className="col-span-5 w-4/5">
                        {
                          // ()=>{
                          //   ValueM==='NOTHING' ? SetValueM() :SetValueM(' asda')
                          // }
                          ValueM
                        }
                         

                       
                      </div>
                    </div>

                 
                  </div>
                </div>
              </div>


            {/* </div> */}



        </>
    )
}

export default addProduct;