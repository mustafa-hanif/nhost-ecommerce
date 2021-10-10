/* eslint-disable max-len */
import { CurrencyDollarIcon, HomeIcon, BriefcaseIcon } from '@heroicons/react/outline';

const menuItems = [
  {
    title: 'Home',
    icon: HomeIcon,
  },
  {
    title: 'Orders',
    icon: BriefcaseIcon,
  },
  {
    title: 'Products',
    icon: CurrencyDollarIcon,
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col border-r py-4 px-1 w-48">
      {menuItems.map(item => <button 
        className="flex my-1 py-2 px-2 items-center 
        text-sm hover:bg-sky-50 border-white border-l-2 hover:border-sky-400" 
        key={item.title}
      >
        <item.icon className='h-6 w-6 mr-2 text-blue-500' />
        <div className='flex h-6 items-center'>{item.title}</div>
      </button>)}
    </div>
  );
}