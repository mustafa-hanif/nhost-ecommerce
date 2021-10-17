/* eslint-disable max-len */
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import { Flex } from 'src/components';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import Navigation from '@/components/Navigation';
import Table from '@/components/Table';
import Form from '@/components/Form';
import Sidebar from '@/components/Sidebar';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowNarrowLeftIcon,
  ArrowLeftIcon,
  ClipboardIcon,
} from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/solid';

function Index() {
  const router = useRouter();
  const { signedIn } = useAuth();
  const [ShowMessage, setShowMessage] = useState('0');

  if (signedIn) {
    router.push('/home');
    return <div>Redirecting...</div>;
  }

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex bg-gray-100">
        <Sidebar />
        <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
          <div>
            <div className="md:grid md:grid-cols-2 md:gap-2">
              <div className="md:col-span-1">
                <div className="flex items-center">
                  <ArrowLeftIcon
                    className="mr-3 h-7 w-7 p-1 text-gray-600 border border-gray-400 rounded-md"
                    aria-hidden="true"
                  />
                  <h1 className="text-2xl font-bold text-gray-900 mr-2">
                    #1001
                  </h1>
                  <div className="rounded-full py-1 px-2 bg-yellow-200 flex items-center text-sm mr-1">
                    <div className="rounded-full p-1 border-2 w-2 border-coolGray-800 mr-1"></div>
                    <div>Authorized</div>
                  </div>
                  <div className="rounded-full py-1 px-2 bg-orange-200 flex items-center text-sm mr-1">
                    <div>Expiring</div>
                  </div>
                  <div className="rounded-full py-1 px-2 bg-yellow-200 flex items-center text-sm mr-1">
                    <div className="rounded-full p-1 border-2 w-2 border-coolGray-800 mr-1"></div>
                    <div>Unfulfilled</div>
                  </div>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-4 justify-end">
                    <div className="text-gray-800 font-semibold">Restock</div>
                    <div className="text-gray-800 font-semibold">Edit</div>
                    <div className="text-gray-800 font-semibold">
                      More Actions
                    </div>
                    <div className="flex items-center divide-x-2 divide-gray-500 divide-opacity-100">
                      <ChevronLeftIcon
                        className="h-7 w-7 p-1 text-gray-400"
                        aria-hidden="true"
                      />{' '}
                      <ChevronRightIcon
                        className="h-7 w-7 p-1 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-0 p-0 ml-10 text-gray-500">
                March 27, 2017 at 5:19p pm from Online Store
              </div>
            </div>
          </div>
          <div className="px-4 py-6 sm:px-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-2">
                <div className="shadow py-5 bg-white rounded-lg w-full mb-5">
                  <div className="flex justify-between mb-5 px-5">
                    <p className="font-semibold text-lg">Unfulfilled (1)</p>
                    <a className="text-lg font-bold text-gray-500">. . .</a>
                  </div>
                  <div className="grid grid-cols-6 border-b px-5 pb-5 mb-5">
                    <div className="col-span-4">
                      <div className="flex">
                        <div className="mr-4 rounded-sm border h-14 w-14 relative">
                          <div className="absolute -top-3 -right-2 bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center"><p className="text-xs font-bold">1</p></div>
                          <img src="https://source.unsplash.com/random" alt="image" className="object-contain h-full w-full" />
                        </div>
                        <p className="text-sky-600 underline">A product</p>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <p className="font-semibold text-gray-700">AED 300.00 x 1</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-semibold text-gray-700 text-right">AED 300.00</p>
                    </div>
                  </div>
                  <div className="flex justify-end px-5">
                    <div className="rounded-lg shadow">
                      <a href="#" className="w-full flex items-center justify-center px-4 py-2 text-sm rounded-sm text-white bg-emerald-700 hover:bg-emerald-800">
                      Fulfill item
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shadow py-5 bg-white rounded-lg w-full mb-5">
                  <div className="flex mb-5 px-5">
                    <a className="text-lg font-bold text-gray-500">Icon</a>
                    <p className="font-bold text-lg">Authorized</p>    
                  </div>
                  <div className="border-b pb-5 mx-5">
                    <div className="grid grid-cols-6 pb-1">
                      <div className="col-span-1">
                        <p className="font-medium text-gray-700 ">Subtotal</p>
                      </div>
                      <div className="col-span-3">
                        <p className="font-medium text-gray-700 ">1 item</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-gray-700 text-right">AED 300.000</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 pb-1">
                      <div className="col-span-1">
                        <p className="font-medium text-gray-700 ">Shipping</p>
                      </div>
                      <div className="col-span-3">
                        <p className="font-medium text-gray-700 ">Standard Shipping (2.188kh)</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-gray-700 text-right">AED 10.000</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 pb-1">
                      <div className="col-span-4">
                        <p className="font-bold text-gray-700 ">Total</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-bold text-gray-700 text-right">AED 310.000</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4 border-b border-gray-200">
                    <div className="flex justify-between">
                      <p className="font-medium text-gray-700">Paid by customer</p>
                      <p className="font-medium text-gray-700 text-right">AED 0.00</p>
                    </div>
                  </div>
                  <div className="flex justify-end px-5 mt-5 items-center">
                    <div className="rounded-lg mr-2">
                      <a href="#" className="w-full font-bold flex items-center justify-center px-4 py-2 text-sm rounded-sm border-gray-300 border text-coolGray-800 bg-white hover:bg-gray-200">
                        Mark as Paid
                      </a>
                    </div>
                    <div className="rounded-lg">
                      <a href="#" className="w-full flex items-center justify-center px-4 py-2 text-sm rounded-sm text-white bg-emerald-700 hover:bg-emerald-800">
                      Capture Payment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="shadow p-5 bg-white rounded-lg w-full mb-5">
                  <div className="flex justify-between mb-3">
                    <p className="font-semibold text-lg">Notes</p>
                    <a className="text-base text-sky-600">Edit</a>
                  </div>
                  <p className="text-gray-500	text-sm">
                    No notes from customer
                  </p>
                </div>
                <div className="shadow rounded-lg bg-white w-full">
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex justify-between mb-3">
                      <p className="font-semibold text-lg">Customer</p>
                      <div className={`bg-blue-500 text-sm opacity-${ShowMessage} transition-opacity duration-500 text-white rounded-full flex items-center justify-center px-2`}><p>Copied</p></div>
                    </div>
                    <a className="text-sky-600 underline text-sm" href="#">mustafa hanif</a>
                    <p className="text-sm">No orders</p>
                  </div>
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex justify-between mb-3">
                      <p className="font-semibold text-base">CONTACT INFORMATION</p>
                      <a className="text-base text-sky-600" href="#">Edit</a>
                    </div>
                    <div className="flex justify-between">
                      <a className="text-sky-600 text-sm" href="#">icemelt7@gmail.com</a>
                      <ClipboardIcon className="h-5 w-5 cursor-pointer"  onClick={() => { navigator.clipboard.writeText('icemelt7@gmail.com'); setShowMessage('100'); setTimeout(() => setShowMessage('0'), 3000); }} />
                    </div>
                  </div>
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex justify-between mb-3">
                      <p className="font-semibold text-base">SHIPPING ADDRESS</p>
                      <a className="text-base text-sky-600" href="#">Edit</a>
                    </div>
                    <div className="flex justify-between">
                      <a className="text-sm">mustafa hanif</a>
                      <ClipboardIcon className="h-5 w-5 cursor-pointer" onClick={() => {navigator.clipboard.writeText('mustafa hanif\nd68\n202\nkarachi DU\nUnited Arab Emirates'); setShowMessage('100'); setTimeout(() => setShowMessage('0'), 3000); }} />
                    </div>
                    <p className="text-sm">d68</p>
                    <p className="text-sm">202</p>
                    <p className="text-sm">karachi DU</p>
                    <p className="text-sm">United Arab Emirates</p>
                    <a className="flex mt-1 text-sky-600" href="#">
                      <p className="text-sm underline  mr-1">View Map</p>
                      <ExternalLinkIcon className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="p-5 mb-5">
                    <p className="font-semibold text-base">BILLING ADDRESS</p>
                    <p className="text-gray-500	text-sm">
                    Same as shipping address
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Form />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

export default Index;
