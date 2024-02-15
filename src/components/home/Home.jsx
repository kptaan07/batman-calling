import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return(
        <div className=" w-full max-full bg-[#030303]">
             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
            <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h2 className="text-4xl font-mono text-red-600 font-bold sm:text-5xl">
                        Gotham Calling...
                        <span className="hidden font-mono sm:block text-4xl">Batman</span>
                    </h2>
                    <Link
                            className="inline-flex text-black items-center px-6 py-3 font-medium bg-[#9e0801] rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-crosshair2" viewBox="0 0 16 16">
                                <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                            </svg>
                            &nbsp; <span className="font-mono">Save Gotham</span>
                        </Link>
                </div>
            </div>

            <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                <img className=" hidden w-96 md:block"src="https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image1"/>
                <img className="w-96 md:hidden"src="https://images.pexels.com/photos/236296/pexels-photo-236296.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image1"/>
            </div>
            </aside>
            <h1 className="text-center text-red-800 text-xl sm:text-2xl py-10 hover:text-red-600 font-serif">"Have you ever danced with the Devil in the pale Moonlight?"</h1>
        
        </div>
    )
}

export default Home