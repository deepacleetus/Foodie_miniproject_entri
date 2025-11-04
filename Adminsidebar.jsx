import React from 'react'
const Adminsidebar = () => {
    return(
        <div className="bg-gray-800 text-white fixed w-64 min-h-screen p-5">
            <div>
                <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
                <hr/>
                <ul>
                    <li className="mb-2">
                        <a href="/adminhome" className="hover:underline">Dashboard</a>
                    </li>
                    <li className="mb-2">
                        <a href="/manage-foods" className="hover:underline">Manage Foods</a>
                    </li>
                    <li className="mb-2">
                        <a href="/view-orders" className="hover:underline">View Orders</a>
                    </li>
                    <li className="mb-2">
                        <a href="/offers" className="hover:underline">Manage Offers</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}