import React from 'react';
import { SortDescendingIcon, photograph } from '@heroicons/react/solid';
import {
  SearchIcon,
  StarIcon,
  ChevronDownIcon,
  InfoIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Divider,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

// Internally, we transform to this
function AllProducts() {

  return (
    <main className="block  bg-gray-100 p-6 pl-10 h-screen w-full ">
      <div className="flex  justify-end  content-around flex-row h-auto w-full flex-wrap justify-between">
        <h2 className="text-2xl justify-between font-medium	">Products</h2>

        <div>
          <button className="ml-6 w-22  h-8  text-center text-normal font-semibold  content-center hover:bg-gray-200  hover:border  border-gray-200 rounded ">
            Export
          </button>
          <button className="ml-6 w-22  text-center text-normal font-semibold content-center hover:bg-gray-200  hover:border  border-gray-200 rounded">
            Import
          </button>
          <button className="ml-8 w-32 h-10 rounded-md	  bg-green-600 hover:bg-green-800 text-white text-center text-normal font-semibold  content-center		    	">
            {' '}
            Add Product
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
              <li className=" text-lg ml-5 w-14 h-10  text-gray-400">Active</li>
              <li className=" text-lg ml-5 w-14 h-10 text-gray-400">Draft</li>
              <li className=" text-lg   ml-5 w-1/5 h-10 text-gray-400">
                Archived
              </li>
            </div>
          </div>

          <Divider />

          <div className="flex mt-4 flex-wrap justify-between">
            <div className="w-4/12">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.600" />}
                />
                <Input type="tel" placeholder="Filter Products" />
              </InputGroup>
            </div>

            <div className=" flex ">
              {/* <button className="w-32  border border-gray-400 rounded font-medium	text-sm	">Product Vendor
        <i class="fa fa-caret-down"></i>

        </button>
    <button className="w-28 border border-gray-400 rounded font-medium	text-sm	">Tagged With</button>
    <button className="w-20 border border-gray-400 rounded font-medium	text-sm">Status</button>
    <button className="w-28 border border-gray-400 rounded font-medium	text-sm">More filters</button> */}

              <Menu>
                <MenuButton
                  borderRadius="2px"
                  width="150px"
                  colorScheme="white"
                  variant="link"
                  size="sm"
                  className="hover:bg-gray-100 rounded border-l border-gray-400 rounded border-t border-gray-400 rounded border-b border-gray-400 rounded border-r border-gray-400 rounded-none	 font-medium  text-sm"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Product Vendor
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  borderRadius="2px"
                  width="150px"
                  colorScheme="white"
                  variant="link"
                  size="sm"
                  className="hover:bg-gray-100 border border-gray-400 	 font-medium  text-sm"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Tagged with
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                </MenuList>
              </Menu>

              <button className="w-28 border  border-gray-400 rounded font-medium	text-sm hover:bg-gray-100">
                More filters
              </button>
            </div>

            <div className="  flex">
              <button className="w-20  border border-gray-400 rounded font-medium	text-sm hover:bg-gray-100">
                {' '}
                <StarIcon color="gray.400" boxSize="1.2em" /> Saved{' '}
              </button>
              <button className="w-20  border border-gray-400 rounded ml-4 font-medium	text-sm hover:bg-gray-100">
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

                <Th>Products</Th>

                <Th>Status</Th>

                <Th isNumeric>Inventory</Th>
                <Th>Type </Th>

                <Th>Vendor </Th>
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
                <Td>Active</Td>

                <Td>32 in Stock</Td>
                <Td>Bag</Td>

                <Td>hofoho6846</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
      <div className="text-center mt-10 ">
        <p>
          <InfoIcon color="green.500" /> Learn More About{' '}
          <a href="#">Product</a>
          <ExternalLinkIcon boxSize="0.9em" color="blue.600" />
        </p>
      </div>
    </main>
  );
}

export default AllProducts;
