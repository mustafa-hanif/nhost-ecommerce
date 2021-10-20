import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
// import Description from '../pages/description'
import { ProductComp ,ThemeComp,DomainComp} from '../pages/description'
import Signup from '../pages/signup'






function addProduct(){
  


  // let a =<Description/>
  const [ValueM,SetValueM]=useState(<ProductComp/>)
  


  // useEffect(()=>{
  // // SetValueM('hdi')
  // console.log('page render')
  // },[])

  // function h(){
  //   ValueM ==='NOTHING' ? SetValueM('WHO') : SetValueM('helloo')
  // }

    return(
        <>
        


<div className='bg-white grid grid-cols-3 gap-4 max-w-7xl mx-auto my-6  ' >
                <div className="col-span-5  ">
                  <h1 className=' py-4 text-left mx-2  text-2xl font-semibold col-span-3 border-b-2'>Get ready to sell online,Try these tips to get started  </h1>
                  <div className="mt-5 flex   bg-white   border-2 border-coolGray-300 border-solid rounded-md h-60">
                    <div className="flex w-full">

                      <div className="flex flex-col bg-gray-100 h-auto  w-2/5">
                        <div className="col-span-2 ">
                          <ul>
                            <li onClick={()=>SetValueM(<ProductComp/>)  }   className='px-7 mt-7  border-l-4 border-orange-400  hover:border-warmGray-900'>

                              <h1>
                                <button>  
                                  Add Producs 
                                  </button> 
                               </h1>
                            </li>
                            <li  onClick={()=>SetValueM(<ThemeComp/>)  }  className='px-7 mt-7  border-l-4 hover:border-warmGray-900 border-orange-400  '>
                              <h1> 
                               <button>   Customized Theme </button>
                               
                                </h1>

                            </li>
                            <li  onClick={()=>SetValueM(<DomainComp/>)} className='px-7 mt-7  border-l-4 hover:border-warmGray-900 border-orange-400  '>

                              <h1>
                                   <button> 
                                     Add Domain
                                     </button>
                              </h1>
                            </li>

                          </ul>
                        </div>
                      </div>

                      <div className="col-span-5 w-4/5">
                        {ValueM}                     

                       
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