import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Divider,
  Center,
  Select,
  InputLeftElement,
  Input,
  Button,
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverTrigger ,
  InputGroup,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton ,
  useDisclosure,
  PopoverArrow,
  
  
  
} from '@chakra-ui/react';

import { SearchIcon, CalendarIcon, ChevronDownIcon } from '@chakra-ui/icons';

function Transfers() {


  const [startDate, setStartDate] = useState(new Date());
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  function search()
  {
    

  }

  return (
    <>
      <div className="flex justify-between	flex-wrap  bg-gray-100 p-6 pl-16 h-full w-screen ">
        <div className="flex flex-row ml-8 w-7/12	 bg-transparent flex-wrap">
          <button className=" w-9 h-10  border border-gray-400 rounded mb-4 ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="currentColor"
              className="bi bi-arrow-left w-6 h-6 text-gray-600 mx-auto"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>

          <h1 className="inline ml-5 mt-2 text-xl font-medium">
            Create inventory transfer
          </h1>
        </div>

        <div className="shadow-md p-6 ml-10 bg-white rounded-lg space-y-4 w-11/12	mx-auto h-auto">
          <div className="flex flex-row">
            <div className="w-3/6 mr-5">
              <h2 className="font-medium text-sm">ORIGIN</h2>

              <Popover>
                <PopoverTrigger>
                  <Button colorScheme="blackAlpha" variant="ghost" size="lg">
                    Select Origin <ChevronDownIcon className="ml-3" />{' '}
                  </Button>
                </PopoverTrigger>
                <PopoverContent borderColor="white">
                  <PopoverBody>
                    <Input placeholder="Search" />
                    <h3 className="mt-5 ml-3 font-medium text-xs">SUPPLIERS</h3>
                    <Divider />
                    <Button
                      colorScheme="blackAlpha"
                      variant="ghost"
                      size="sm"
                      className="mt-3"
                    >
                      No supplier found
                    </Button>
                    <Divider />

                    <h4 className="text-blue-500 mt-5 ml-3 mb-4 cursor-pointer hover:underline">
                      Create new supplier
                    </h4>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <Center height="80px">
              <Divider orientation="vertical" />
            </Center>

            <div className="w-3/6 ml-5 ">
              <h2 className="font-medium text-sm">DESTINATION</h2>
              <Popover>
                <PopoverTrigger>
                  <Button colorScheme="blackAlpha" variant="ghost" size="lg">
                    Select destination <ChevronDownIcon className="ml-3" />{' '}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody>
                    <Input placeholder="Search" />
                    <Button
                      colorScheme="blackAlpha"
                      variant="ghost"
                      size="md"
                      className="mt-3"
                    >
                      Burj Khalifa{' '}
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="shadow-md p-6 ml-10 bg-white rounded-lg space-y-4 w-11/12	mx-auto h-auto mt-5">
          <h2 className="font-medium text-lg">Add Product</h2>
          <div className="flex flex-row">
            <InputGroup className="ml-2">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.600" />}
              />
              <Input type="tel" placeholder="Search products"  onKeyPress={onOpen} />
              <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered 
        size="3xl"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader >
              <button className=" w-9 h-10 mb-4 ml-3 inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="currentColor"
              className="bi bi-arrow-left w-6 h-6 text-gray-600 mx-auto"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
               <h3 className="inline ml-5 -mt-2">All Products</h3>

</AlertDialogHeader>
<Divider/>
          <AlertDialogCloseButton />
          <AlertDialogBody>
              <div className="flex flex-row">
          <Input type="tel" placeholder="Search products"/>

          <Popover>
  <PopoverTrigger>
  <Button variant="unstyled">
      <button className=" p-1 ml-3 mr-3 border border-gray-300 rounded text-base font-medium w-32"> 
      <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
</svg>
      Filter
      

      
      </button>

    
    </Button>

  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverBody>

        <ul>
<li className="mt-2">
    <input type="radio" ></input>
    <text className="ml-3">Barcode</text>
</li>

<li className="mt-2">
    <input type="radio"></input>
    <text className="ml-3">  SKU</text>
  
</li>
<li className="mt-2">
    <input type="radio"></input>
    <text className="ml-3"> Variant ID</text>
   
</li>
<li className="mt-2">
    <input type="radio"></input>
    <text className="ml-3">Variant title</text>
    
</li>

            </ul>
    </PopoverBody>
  </PopoverContent>
</Popover>
      
</div>
<Divider className="mt-3"/>

<div className="flex flex-row justify-between mt-4 mb-4">

    <h2 className="font-medium">PRODUCTS</h2>
    <h2 className="font-medium">TOTAL AVAILABLE
</h2>
</div>

<Divider/>

<div className="flex flex-row flex-wrap justify-between w-full h-20  items-center">

<input
      type="checkbox"
       className="h-5 w-5 rounded border-2 border-gray-400"
 ></input>
<svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 h-8 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>

<h2>NAME</h2>

<button className="border border-blue-400 rounded-3xl bg-blue-300 w-20">Status</button>

<h2 className="w-20">0</h2>
</div>
<Divider/>
          </AlertDialogBody>
          <AlertDialogFooter>
              

<div className="flex   w-full justify-start items-center content-center">

<div className="flex-grow-3 w-full">

    <button className=" p-3 bg-gray-100 text-gray-400 border border-gray-300 rounded text-base font-medium ">0 variant selected</button>
    </div>
    
    <div>
    <button ref={cancelRef} onClick={onClose} className="p-3 border border-gray-300 rounded text-base font-medium w-32">Cancel</button>
    </div>
    <div>
    <button className="p-3 border text-gray-400 border border-gray-300 rounded text-base font-medium w-32">Add Transfer</button>
    </div>
    
    
</div>
            {/* <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3}>
              Yes
            </Button> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
             
            </InputGroup>
            <Button
           
              colorScheme="whiteAlpha"
              color="black"
              className="ml-2 border border-gray-300 rounded"
            >
              Browse
            </Button>
          </div>
        </div>

        <div className="flex w-full p-4 justify-between">
          <div className="w-3/5">
            <div className="mt-5 shadow-md p-6 bg-white rounded-lg space-y-4 w-11/12	mx-auto h-full ">
              <h2 className="font-medium text-lg">Shipment details</h2>

              <h2 className="text-base">Estimated arrival</h2>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border border-gray-300 rounded w-full"
              />

              <h2 className="text-base">Tracking number</h2>
              <input
                type="text"
                className="border border-gray-300 rounded w-full"
              ></input>

              <h2 className="text-base">Shipping carrier</h2>
              <Select placeholder="Select" className="font-medium">
                <option value="option1">4px</option>
                <option value="option2">APC</option>
                <option value="option3">Canpar</option>
                <option value="option3">DPD</option>
                <option value="option3">DHL Express</option>
                <option value="option3">FedEx</option>
              </Select>
            </div>
          </div>

          <div className="w-3/5 ">
            <div className="mt-5 shadow-md p-6 bg-white rounded-lg space-y-4 w-11/12	mx-auto h-3/4 ">
              <h2 className="font-medium text-lg">Additional Details</h2>
              <h2 className="text-base">Reference number</h2>
              <input
                type="text"
                className="border border-gray-300 rounded w-full"
              ></input>
              <Divider />
              <div className="flex flex-row  justify-between">
                <h2 className="font-medium text-sm">Tags</h2>

                <h3 className="text-blue-500 text-sm cursor-pointer">
                  View all tags
                </h3>
              </div>
              <input
                type="text"
                className="border border-gray-300 rounded w-full"
                placeholder="Urgent, reviewed,wholesale"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transfers;
