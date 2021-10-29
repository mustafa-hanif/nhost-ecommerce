import React from 'react';
import { Select } from '@chakra-ui/react';
import {
  SearchIcon,
  ChevronDownIcon,
  InfoIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
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
  Wrap,
  WrapItem,
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
} from '@chakra-ui/react';

function Inventory() {
  return (
    <>
      <main className="block  bg-gray-100 p-6 pl-10 h-screen w-full ">
        <div className="flex  justify-end  content-around flex-row h-auto w-full flex-wrap justify-between">
          <h2 className="text-2xl justify-between font-medium	">Inventory</h2>

          <div>
            <button className="ml-6 w-22  h-8  text-center text-normal font-semibold  content-center hover:bg-gray-200  hover:border  border-gray-200 rounded ">
              Export
            </button>
            <button className="ml-6 w-22  text-center text-normal font-semibold content-center hover:bg-gray-200  hover:border  border-gray-200 rounded">
              Import
            </button>
            <button className="ml-8 w-32 h-10 rounded-md	  bg-green-600 hover:bg-green-800 text-white text-center text-normal font-semibold  content-center		    	">
              {' '}
              View Product
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

            <div className="flex flex-row ">
              <Menu>
                <MenuButton
                  borderRadius="5px"
                  width="120px"
                  height="40px"
                  colorScheme="white"
                  variant="link"
                  size="sm"
                  className="hover:bg-gray-100 rounded border-l border-gray-400 rounded border-t border-gray-400 rounded border-b border-gray-400 rounded border-r border-gray-400 rounded-none	 font-medium  text-sm"
                  as={Button}
                  rightIcon={<ChevronDownIcon boxSize={5} />}
                >
                  Filter
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    Show all inventory where
                    <br />
                    <Select
                      placeholder="Sort By SKU (ascending)"
                      width="22em"
                      className="ml-4"
                    >
                      <option value="option1">Product variant (A-Z)</option>
                      <option value="option2">Product variant (Z-A)</option>
                      <option value="option3">Available ascending</option>
                      <option value="option3">Available descending</option>
                    </Select>
                  </MenuItem>
                </MenuList>
              </Menu>

              <InputGroup className="ml-2">
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.600" />}
                />
                <Input type="tel" placeholder="Search inventory" />
              </InputGroup>

              <Select
                placeholder="Sort By SKU (ascending)"
                width="22em"
                className="ml-4"
              >
                <option value="option1">Product variant (A-Z)</option>
                <option value="option2">Product variant (Z-A)</option>
                <option value="option3">Available ascending</option>
                <option value="option3">Available descending</option>
              </Select>
            </div>

            <Divider />
            <Table variant="" className="">
              <Thead>
                <Tr>
                  <Th>
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-2 border-gray-400"
                    ></input>
                  </Th>

                  <Th>Products</Th>

                  <Th>SKU</Th>

                  <Th isNumeric>When sold out</Th>
                  <Th>Incoming </Th>
                  <Th>Available </Th>
                  <Th>Edit quantity available </Th>
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
                      <h2 className="block mt-3">Item</h2>
                    </div>
                  </Td>

                  <Td>Active</Td>

                  <Td>32 in Stock</Td>
                  <Td>Bag</Td>

                  <Td>hofoho6846</Td>
                  <Td>
                    <div className="flex flex-row ">
                      <button className="w-14 h-8 border  border-gray-300 rounded font-medium bg-gray-500 text-white">
                        Add
                      </button>
                      <button className="w-14 h-8 border  border-gray-300 rounded-sm font-medium">
                        Set
                      </button>

                      <NumberInput width="16" size="sm" className="ml-2">
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>

                      <button className="ml-2 w-14 h-8 rounded-md	  bg-green-600 hover:bg-green-800 text-white text-center text-normal font-semibold  content-center">
                        Save
                      </button>
                    </div>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
        <div className="text-center mt-10 ">
          <p>
            <InfoIcon color="green.500" /> Learn More About{' '}
            <a href="#" className="text-blue-600">
              Managing Inventory
            </a>
            <ExternalLinkIcon boxSize="0.9em" color="blue.600" />
          </p>
        </div>
      </main>
    </>
  );
}

export default Inventory;
