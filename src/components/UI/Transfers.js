import React , { useState }from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Divider,
  Center,
  Select,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import { SearchIcon, CalendarIcon } from '@chakra-ui/icons';

function Transfers() {
    
  const [startDate, setStartDate] = useState(new Date());

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

              <Select
                size="lg"
                variant="unstyled"
                placeholder="Select Origin"
                borderColor="white"
                focusBorderColor="white"
                className="mt-4 w-72 bg-red-400 h-72 text-gray-400 font-medium"
              >
                <Button colorScheme="blue">Button</Button>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <Center height="80px">
              <Divider orientation="vertical" />
            </Center>

            <div className="w-3/6 ml-5 ">
              <h2 className="font-medium text-sm">DESTINATION</h2>

              <Select
                size="lg"
                variant="unstyled"
                placeholder="Select destination"
                borderColor="white"
                focusBorderColor="white"
                className="mt-4 w-72 bg-red-400 h-72 text-gray-400 font-medium"
              >
                <option>
                  {' '}
                  <input
                    type="text"
                    className="border border-red-500 rounded"
                  ></input>
                </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
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
              <Input type="tel" placeholder="Search products" />
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
