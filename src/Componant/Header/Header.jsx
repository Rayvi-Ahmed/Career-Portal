import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-stone-300 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/statistics'}>Statistics</Link></li>
                            <li><Link to={'/applied job'}>Applied Job</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <Link
                        to='/'
                        className='px-8 py-3 font-bold rounded text-3xl'
                    >
                        Career Portal
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-l font-semibold">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/statistics'}>Statistics</Link></li>
                        <li><Link to={'/applied job'}>Applied Job</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;