import React from 'react'
import {
        CalendarIcon,
        ChartBarIcon,
        FolderIcon,
        HomeIcon,
        UserIcon,
        TagIcon,
        InboxIcon,
        InboxInIcon,
        UsersIcon,
        SpeakerphoneIcon,
        ReceiptTaxIcon,
        ViewGridAddIcon,
        DocumentAddIcon
} from '@heroicons/react/outline';
// import { FolderOpen } from '@material-ui/icons';
import { Disclosure } from '@headlessui/react';





function ProductComp() {
        return (
                <>

                        <div className="flex ">

                                <div className="flex flex-col mx-5 w-2/3 text-center my-5 ">

                                        <h1 className='text-xl'>ADD YOUR FIRST PRODUCT</h1>
                                        <h2 className='text-xs px-10 my-4 '>Add physical items, digital downloads, services, or anything else you dream up.</h2>
                                        <button className='w-2/5 my-3 rounded-lg text-coolGray-50 my-5  text-center justify-center mx-10 bg-green-900 '> Add Product</button>
                                </div>

                                <div className="h-12">

                                Icon Picture Here
                                </div>

                        </div>
                </>
        )
}



function ThemeComp() {

        return (
                <>



                        <div className="flex ">

                                <div className="flex flex-col mx-5 w-2/3 text-center my-5 ">

                                        <h1 className='text-xl'>Edit the look and feel of your online store</h1>
                                        <h2 className='text-xs px-10 my-4 '> Choose a theme and add your logo, colors, and images to reflect your brand.</h2>
                                        <button className='w-2/5 my-3 rounded-lg my-5 text-coolGray-50  text-center justify-center mx-10 bg-green-900 '> Customize Theme</button>
                                </div>

                                <div className="h-12">

                                Icon Picture Here
                                </div>

                        </div>
                </>
        )
}



function DomainComp() {
        return (
                <>

                        <div className="flex ">

                                <div className="flex flex-col mx-5 w-2/3 text-center my-5 ">

                                        <h1 className='text-xl'>Strengthen your brand with a custom domain</h1>
                                        <h2 className='text-xs px-10 my-1 '> Your current domain is shaukat-store2.myshopify.com but you can add a custom domain to help customers find your online store.</h2>
                                        <button className='w-2/5  rounded-lg my-5  text-coolGray-50  text-center justify-center mx-10  bg-green-900 '> Add Domain</button>
                                </div>

                                <div className="h-12">

                                       Icon Picture Here
                                </div>

                        </div>

                </>
        )
}

// export default description;
export { ProductComp, ThemeComp, DomainComp }