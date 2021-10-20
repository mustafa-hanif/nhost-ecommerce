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
import { FolderOpen } from '@material-ui/icons';


function ThemeComp() {

        return (
                <>


                        
<div className="flex">
<h1>Theme Comp</h1>
<div className="flex flex-col mx-5 ">

        <h1 className='text-2xl'>ADD YOUR FIRST PRODUCT</h1>
        <h2 className='text-xl '>Add physical items, digital downloads, services, or anything else you dream up.</h2>
        <button className='bg-green-600 w-auto'> Add Product</button>
</div>

<div className="h-12">
</div> {FolderIcon}

</div>
                </>
        )
}





function ProductComp() {
        return (
                <>

                        <div className="flex">
               
                                <div className="flex flex-col mx-5 ">

                                        <h1 className='text-2xl'>ADD YOUR FIRST PRODUCT</h1>
                                        <h2 className='text-xl '>Add physical items, digital downloads, services, or anything else you dream up.</h2>
                                        <button className='bg-green-600 w-auto'> Add Product</button>
                                </div>

                                <div className="h-12">
                                </div> {FolderIcon}

                        </div>
                </>
        )
}
function DomainComp() {
        return (
                <>

                        <div className="flex">

                                <div className="flex flex-col mx-5 ">
                                        <h1>Domain</h1>
                                        <h1 className='text-2xl'>ADD YOUR FIRST PRODUCT</h1>
                                        <h2 className='text-xl '>Add physical items, digital downloads, services, or anything else you dream up.</h2>
                                        <button className='bg-green-600 w-auto'> Add Product</button>
                                </div>

                                <div className="h-12">
                                </div> {FolderIcon}

                        </div>
                </>
        )
}

// export default description;
export { ProductComp ,ThemeComp ,DomainComp }