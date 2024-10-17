import React from 'react';
import img from '../../assets/navlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import NewNavbar from './NewNavbar';

const Navbar = () => {
    return (
        <>
            <header className='bg-gray-900'>
                <nav className="p-4 ">
                    <div className="grid grid-cols-3 h-fit gap-x-20 md:grid-cols-3 ">
                        <div>
                            <img src={img} alt="Logo" className="h-10 w-26" />
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-96 p-2 rounded-md text-black"
                            />
                            <div className="bg-amber-500 p-2 rounded-md cursor-pointer">
                                <SearchIcon />
                            </div>
                        </div>
                        <div className='flex flex-row h-9 relative  bottom-2 '>
                            <div className='p-0 cursor-pointer mr-6 ml-6 hover:border-2 border-spacing-2 relative top-5'>
                                <Link to="/singin" className="text-white">Singin</Link>
                            </div>
                            <div className='flex flex-row mr-6 ml-4 relative top-5'>
                                <Badge badgeContent={2} color='primary' className='cursor-pointer hover:border-2 border-spacing-2 pr-1'>
                                    <ShoppingCartSharpIcon color='primary' />
                                    <p className='text-white pr-2'>Cart</p>
                                </Badge>
                            </div>
                            <div className='mr-6 ml-3 hover:border-2 border-spacing-2 cursor-pointer h-fit '>
                                <p className='text-white'>Returns & <br /> <b>Order</b></p>
                            </div>
                            <div className='hover:border-2 p-2 border-spacing-0 cursor-pointer h-fit mt-0'>
                                <Avatar alt='User' />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <NewNavbar />
        </>
    );
};

export default Navbar;
