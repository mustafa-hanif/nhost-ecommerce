import React from 'react';
import {
    
    SearchIcon,
    ChevronDownIcon,
    InfoIcon,
    ExternalLinkIcon,
    StarIcon,
     
  } from '@chakra-ui/icons';

  import { SortDescendingIcon, photograph } from '@heroicons/react/solid';


import {
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Divider,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select
  } from '@chakra-ui/react';
  
  function Collections()
  
{
    return(

        <main className="block  bg-gray-100 p-6 pl-10 h-screen w-full ">
      
        <div className="flex  justify-end  content-around flex-row h-auto w-full flex-wrap justify-between">
          <h2 className="text-2xl justify-between font-medium	">Inventory</h2>

          <div>
           
            <button className="ml-8 w-36 h-10 p-2 rounded-md	  bg-green-600 hover:bg-green-800 text-white text-center text-normal font-semibold  content-center		    	">
              {' '}
              Create collection
            </button>
          </div>
        </div>

        <div className="">
          <div className=" shadow-md p-6 bg-white rounded space-y-4 w-full mt-6 ">
            <div className="flex flex-wrap flex-col rounded-md border-gray-300">
              <div className="flex flex-wrap flex-row list-none cursor-pointer ">
                <li className=" text-lg text-center	 w-14 h-10  border-b-4  border-green-800 rounded">
                  All
                </li>
              </div>
            </div>

            <Divider />

            <div className="flex flex-row w-full">

           <div className="w-9/12">
           <InputGroup className="ml-2">
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.600" />}
                />
                <Input type="tel" placeholder="Search inventory" />
              </InputGroup>

               </div>


               <div className="ml-6 w-2/6 flex">

               <Select placeholder="Availability">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>

<Select placeholder="Type">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>

                   </div>

                   <div className="w-2/6 ml-3 ">

                   <button className="w-24 p-2 border border-gray-300 rounded font-medium	text-sm hover:bg-gray-100">
                {' '}
                <StarIcon color="gray.400" boxSize="1.2em" /> Saved{' '}
              </button>
              <button className="w-24 p-2 border border-gray-300 rounded ml-4 font-medium	text-sm hover:bg-gray-100">
                <SortDescendingIcon
                  width="24"
                  color="gray"
                  className="inline"
                />
                Sort
              </button>


                       </div>


             
            </div>

            <Table variant="" className="">
              <Thead>
                <Tr>
                  <Th>
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-2 border-gray-400"
                    ></input>
                  </Th>
                  <Th></Th>
                  
                  <Th>Title</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th>Product Conditions</Th>
                  <Th></Th>
                  <Th></Th>
                 
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-2 border-gray-400"
                    ></input>
                  </Td>
                  <Td>
                    <div className="block w-16 h-14  border border-gray-400 rounded  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 block m-auto mt-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      
                    </div>
                  </Td>

                  <Td>HomePage</Td>

                 
                  
                </Tr>
              </Tbody>
            </Table>

          </div>
          
        </div>
        <div className="text-center mt-10 ">
          <p>
            
          </p>
        </div>

      </main>
    )
}

export default Collections;