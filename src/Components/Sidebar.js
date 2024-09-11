import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <>
            {/* Button to toggle the sidebar */}
            <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-60 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                style={{ backgroundColor: '#13345A', borderRight: '1px solid white' }} // Try changing this color
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <a href="#" className="flex items-center ps-2.5 mb-5">
                        <img src="./Images/logo.png" className="me-3" alt="Logo" />
                        <span className="self-center text-xl font-semibold text-white">hourhub</span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 rounded-lg" style={{ color: '#B8C1CD' }}>
                                <img src='./Images/Dashboard.png' alt="Dashboard" />
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2" style={{ color: '#B8C1CD' }}>
                                <img src='./Images/Timesheets.png' alt="Timesheets" />
                                <span className="ms-3">Timesheets</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2" style={{ color: '#B8C1CD' }}>
                                <img src='./Images/Overview.png' alt="Project Overview" />
                                <span className="ms-3">Project Overview</span>
                            </a>
                        </li>
                        <li>
                            <div>
                                <button
                                    onClick={toggleDropdown}
                                    className="flex p-2 w-full text-white"
                                >
                                    <img src='./Images/Admin.png' alt="Admin" />
                                    <span className="ms-3 flex-1">Admin</span>
                                    <svg
                                        className={`w-4 h-4 ml-3 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <div className={`mt-2 space-y-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                                    <a href="#" className="block px-4 py-2"
                                        style={{ color: '#B8C1CD' }}>Customers</a>
                                    <Link to={'/'} className="block px-4 py-2"
                                        style={{ color: '#0E8DF0' }}>Projects</Link>
                                    <Link to={'/employee'} className="block px-4 py-2"
                                        style={{ color: '#B8C1CD' }}>Employees</Link>
                                    <a href="#" className="block px-4 py-2" style={{ color: '#B8C1CD' }}>Working Schemes</a>
                                    <a href="#" className="block px-4 py-2" style={{ color: '#B8C1CD' }}>Public Holidays</a>
                                    <a href="#" className="block px-4 py-2" style={{ color: '#B8C1CD' }}>Workload Schemes</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
