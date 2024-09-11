import React, { Children } from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col md:flex-row '>
                <div className='w-full md:w-72'>
                    <Sidebar />
                </div>
                <div className='w-full flex flex-col'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout