import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import {Menu} from 'lucide-react';

const SideBar = () => {
  const {user} = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  };
  //console.log(user)
  return (
    <>
    <Menu onClick={toggleSidebar} className=' mt-10 ml-4 flex md:hidden'/>
    {<Sidebar className={ ` h-fit md:flex md:relative ${isOpen?'flex absolute top-20 z-[9999]':'hidden'}`} aria-label=" Sidebar with content separator example rounded" >
      <Sidebar.Items className='bg-teal-400 py-1 mr-2 rounded'>
      <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="">
        <p className=' text-base'>
          {
            user?.displayName || "Demo User"
          }
        </p>
      </Sidebar.Logo>
        <Sidebar.ItemGroup className='bg-teal-200 rounded'>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>}
    </>
  )
}
export default SideBar
