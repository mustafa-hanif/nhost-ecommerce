import React from 'react';

function AddProducts() {
  return (
    <div className="flex justify-between	flex-wrap  bg-gray-100 p-6 pl-16 h-full w-full ">
      <div className="flex flex-row ml-8 w-7/12	 bg-transparent flex-wrap">
        <button className=" w-9 h-10  border border-gray-400 rounded mb-4 ">
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

        <h1 className="inline ml-5 mt-2 text-xl font-medium">Add Products</h1>

        <div className="flex   w-full h-auto mb-4 ">
          <div className="shadow-md p-6 bg-white rounded space-y-4 w-full	 h-full">
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
        {/* 2nd media upload */}
        <div className="flex   w-full h-auto mb-4 ">
          <div className="shadow-md p-6 bg-white rounded space-y-4 w-full">
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

        {/* 3rd part */}
        <div className="flex    w-full h-auto mb-4 ">
          <div className="shadow-md p-6 bg-white rounded space-y-4 w-full">
            <div className="flex flex-col rounded-md border-gray-300">
              <label className="font-semibold 	">Pricing </label>

              <div className="flex flex-row justify-between mt-5">
                <div className="w-11/12	">
                  <p>Price</p>

                  <input
                    type="text"
                    className="rounded border border-gray-300  w-11/12"
                    placeholder="Rs. 0.00"
                  ></input>
                </div>

                <div className="w-11/12">
                  <p>Compare at price</p>
                  <input
                    type="text"
                    className="rounded border border-gray-300 w-11/12"
                    placeholder="Rs. 0.00"
                  ></input>
                </div>
              </div>
              <hr className="mt-5"></hr>
              <div className=" mt-5 flex">
                <div className="w-11/12">
                  <p>Price</p>

                  <input
                    type="text"
                    className="rounded border border-gray-300 w-11/12 "
                    placeholder="Rs. 0.00"
                  ></input>
                </div>

                <div className="flex justify-between ">
                  <div className="w-6/12	">
                    <p className="ml-5 mt-5 text-gray-500 ">Margin</p>
                    <input
                      type="text"
                      placeholder="--"
                      className="border-none bg-transparent ml-5 w-6/12		"
                    ></input>
                  </div>

                  <div className=" w-6/12	">
                    <p className="mt-5 text-gray-500 w-6/12	">Profit</p>
                    <input
                      type="text"
                      placeholder="--"
                      className="border-none bg-transparent  w-6/12		"
                    ></input>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 -mt-3.5 mb-3 text-sm	">
                Customers won't see this
              </p>
              <div>
                <input
                  type="checkbox"
                  className="rounded border-2 border-gray-400"
                  defaultValue=""
                />
                <label htmlFor="" className="cursor-pointer">
                  {' '}
                  Charge tax on this product
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* //4th part */}

        <div className="flex    w-full h-auto mb-4 ">
          <div className="shadow-md p-6 bg-white rounded space-y-4 w-full">
            <div className="flex flex-col rounded-md border-gray-300">
              <label className="font-semibold mb-5	">Inventory </label>

              <div className="flex justify-between">
                <div className="w-11/12	">
                  <p>SKU (Stock Keeping Unit)</p>
                  <input
                    type="number"
                    className="rounded border border-gray-300 cursor-pointer w-11/12		"
                  ></input>
                </div>

                <div className="w-11/12">
                  <p>Barcode (ISBN,UPC,GTIN, etc.)</p>
                  <input
                    type="number"
                    className="rounded border border-gray-300 cursor-pointer w-11/12	"
                  ></input>
                </div>
              </div>

              <div className="mt-5">
                <input
                  type="checkbox"
                  className="rounded border-2 border-gray-400"
                  defaultValue=""
                />
                <label htmlFor="" className="cursor-pointer ">
                  {' '}
                  Track quantity
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 5th Part Is Now Coded
-------------------------- */}

        <div className="flex  w-full h-auto mb-4 ">
          <div className="shadow-md p-6 bg-white rounded space-y-4 w-full mb-1">
            <div className="flex flex-col rounded-md border-gray-300">
              <label className="font-semibold mb-5	">Shipping </label>
              <div>
                <input
                  type="checkbox"
                  className="rounded border-2 border-gray-400"
                  defaultValue=""
                />
                <label htmlFor="" className="cursor-pointer">
                  {' '}
                  This is a physical product
                </label>
              </div>
              <hr className="mt-5 w-full"></hr>
              <p className="text-gray-500	 text-sm	mt-2">
                Customers won’t enter their shipping address or choose a
                shipping method when buying this product.
              </p>
            </div>
          </div>
        </div>

        {/* Part 6th is  startred */}
        <div className="flex   w-full h-auto mb-4 ">
          <div className="shadow-md p-6 bg-white rounded space-y-4 w-full">
            <div className="flex flex-col rounded-md border-gray-300">
              <label className="font-semibold 	">Variants </label>

              <div className="mt-5">
                <input
                  type="checkbox"
                  className="rounded border-2 border-gray-400 "
                  defaultValue=""
                />
                <label htmlFor="" className="cursor-pointer text-base">
                  {' '}
                  This product has multiple options, like different sizes or
                  colors
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Part 7th is  startred */}

        <div className="flex    w-full h-auto mb-4 ">
          <div className="shadow-md p-6 bg-white rounded space-y-4 w-full">
            <div className="flex flex-col rounded-md border-gray-300">
              <div className="flex justify-between">
                <label className="font-semibold 	">
                  Search engine listing preview{' '}
                </label>

                <h4 className="inline text-blue-700 text-sm">
                  {' '}
                  Edit Website SEO{' '}
                </h4>
              </div>

              <p className="mt-5">
                Add a title to see how this product might appear in a search
                engine listing
              </p>
            </div>
          </div>
        </div>

        {/* //1st flex part is ending here */}
      </div>

      {/* -----------------------
Officialy the 2nd part 
----------------------- */}

      <div className=" flex flex-col w-80	 bg-transparent mt-14 mr-14">
        <div className="flex flex-col  mb-3 w-80 h-auto">
          <div className="shadow-md p-6 bg-white rounded w-full mb-0 mt-1">
            <h2 className="font-semibold text-xlg mb-5	">Product Status</h2>
            <select className="w-full rounded border border-gray-300 p-2 h-10">
              <option>Draft</option>
              <option>Active</option>
            </select>
            <p className="text-gray-500	 text-sm	mt-2">
              This product will be hidden from all sales channels.
            </p>
            <hr className="w-full" />

            <h2 className="mt-5 text-xs	font-semibold			">
              SALES CHANNELS AND APPS
            </h2>
            <div className="flex flex-row cursor-pointer">
              <input
                type="checkbox"
                className="mt-5 h-5 w-5 rounded border-2 border-gray-400"
              ></input>
              <p className="font-normal text-sm mt-5 ml-2">Online Store</p>
            </div>
          </div>
        </div>

        {/* //2nd part is now starting */}

        <div className="flex flex-col   mb-3 w-80 h-auto">
          <div className="shadow-md p-6 bg-gray-100 rounded border-solid border-b-2 border-light-blue-500">
            <h2 className="font-semibold text-xlg">Organization</h2>

            <label className="mt-5 block ">Vendor</label>
            <div className="flex flex-row mt-1">
              <input
                type="text"
                className=" w-11/12 rounded border border-gray-300"
                placeholder="e.g Nike"
              ></input>
              <button className="  w-11 h-10 border bg-white  border-gray-400 rounded ml-2">
                <svg
                  viewBox="0 0 20 20"
                  className=" ml-2 Polaris-Icon__Svg_375hu"
                  fill="gray"
                  focusable="false"
                  width={20}
                  height={20}
                  aria-hidden="true"
                >
                  <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" />
                </svg>
              </button>
            </div>

            <hr></hr>
          </div>

          <div className="shadow-md p-6 bg-gray-100 rounded border-solid border-b-2 border-light-blue-500 ">
            <h3 className="font-medium	 text-sm">PRODUCT TYPE</h3>

            <label className="mt-5 block ">Standard</label>
            <div className="flex flex-row mt-1">
              <div className="flex flex-row mt-1">
                <input
                  type="text"
                  className=" w-11/12 rounded border border-gray-300"
                  placeholder="Search types"
                ></input>
                <button className="  w-11 h-10 border bg-white border-gray-400 rounded ml-2">
                  <svg
                    viewBox="0 0 20 20"
                    className=" ml-2 Polaris-Icon__Svg_375hu"
                    fill="gray"
                    focusable="false"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  >
                    <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="mt-5 text-blue-600	">Add custom type</p>
          </div>

          <div className="shadow-md p-6 bg-gray-100 rounded border-solid border-b-2 border-light-blue-500  ">
            <h3 className="font-bold text-xs">COLLECTIONS</h3>
            <div className="flex flex-row mt-1">
              <input
                type="text"
                className=" w-11/12 rounded border border-gray-300"
                placeholder="e.g Nike"
              ></input>
            </div>

            <p className="mt-1 text-gray-500	">
              Add this product to a collection so it’s easy to find in your
              store.
            </p>
          </div>

          <div className="shadow-md p-6 bg-gray-100 mb-3 ">
            <h3 className="font-bold text-xs">TAGS</h3>
            <div className="flex flex-row mt-1">
              <input
                type="text"
                className=" w-11/12 rounded border border-gray-300"
                placeholder="Vintage, cotton, summer"
              ></input>
            </div>
          </div>

          {/* -----------------last item */}

          <div className="flex flex-col  mb-3 w-80 h-auto">
            <div className="shadow-md p-6 bg-gray-100 rounded w-full">
              <h2 className="font-semibold text-xlg mb-5">Online store</h2>
              <p className="mt-5">Theme template</p>
              <select className="w-full rounded border border-gray-300 p-2 mt-1">
                <option>Default Product</option>
              </select>
              <p className="text-gray-500	 text-sm	mt-2">
                Assign a template from your current theme to define how the
                product is displayed.
              </p>
            </div>
          </div>

          {/* Now last part End here */}
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
