import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import { Flex } from 'src/components';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import Navigation from '@/components/Navigation';
import Table from '@/components/Table';
import Form from '@/components/Form';
import Sidebar from '@/components/Sidebar';
import { CalendarIcon } from '@heroicons/react/outline';
import { Checkbox } from '@chakra-ui/checkbox';
function Index() {
  const router = useRouter();
  const { signedIn } = useAuth();

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

      <main className="flex">
        <Sidebar />

        <div className="bg-gray-100 p-10 h-screen w-screen ">
          <button className=" w-9 h-10  border border-gray-400 rounded ">
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

          <h2 className="inline ml-5  text-xl font-medium">Add Products</h2>

          <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto my-6">
            <div className="col-span-2">
              <div className="shadow-md p-6 bg-white rounded space-y-4">
                <div className="flex flex-col rounded-md border-gray-300">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Short sleeve t-shirt"
                    className="mt-1 rounded border border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Description</label>
                  <textarea
                    className="rounded border border-gray-300 mt-1"
                    rows={5}
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="shadow-md p-6 bg-white rounded">
                <h2 className="font-semibold text-lg">Product Status</h2>
                <select className="w-full rounded border border-gray-300 p-2">
                  <option>Draft</option>
                  <option>Active</option>
                </select>
                <p className="text-gray-500	 text-sm	mt-2">
                  This product will be hidden from all sales channels.
                </p>
                <hr className="mx auto" />

                <h2 className="mt-5 text-xs	font-semibold			">
                  SALES CHANNELS AND APPS
                </h2>
                <input
                  type="checkbox"
                  className="mt-5 h-5 w-5 rounded border-2 border-gray-400"
                ></input>
                <p className="inline relative top-3 left-3">Online Store</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto my-6">
            <div className="col-span-2">
              <div className="shadow-md p-6 bg-white rounded space-y-4">
                <div className="flex flex-col rounded-md border-gray-300">
                  <div className="inline-block grid grid-cols-4 gap-2">
                    <label className="font-semibold col-span-3	">Media </label>
                    <p className="inline text-blue-700 text-sm	">
                      Add media from URL
                      <svg
                        viewBox="0 0 20 20"
                        className="inline Polaris-Icon__Svg_375hu"
                        fill="blue"
                        focusable="false"
                        width="20"
                        aria-hidden="true"
                      >
                        <path d="m5 8 5 5 5-5H5z"></path>
                      </svg>
                    </p>
                  </div>

                  <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-coolGray-300 border-dashed rounded-md h-60">
                      <div className="space-y-1 mt-10 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-coolGray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-coolGray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-coolGray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="shadow-md p-6 bg-white rounded">
                <h2 className="font-semibold text-lg">Organization</h2>

                <label className="relative top-4 block ">Vendor</label>

                <input
                  type="text"
                  className="float-left	 inline w-60 rounded border border-gray-300 p-2 mt-5"
                  placeholder="e.g Nike"
                ></input>
                <button className="  w-10 h-10 mt-5 relative left-2 border border-gray-400 rounded ">
                  <svg
                    viewBox="0 0 20 20"
                    className="relative left-2 Polaris-Icon__Svg_375hu"
                    fill="gray"
                    focusable="false"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  >
                    <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" />
                  </svg>
                </button>
                <hr></hr>

                {/* <h2 className="float-left text-base	 font-medium block	">Product Type</h2>
    <h3 className="float-left  top-4  ">Vendor</h3> */}
              </div>
            </div>
          </div>
        </div>

        {/* Replace with your content */}
        {/* <div className="px-4 py-6 sm:px-0">
            <Table />
          </div>
          <div className="px-4 py-6 sm:px-0">
            <Form />
          </div> */}
        {/* /End replace */}
      </main>
    </>
  );
}

export default Index;
