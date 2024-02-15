import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header,Footer,Home,About} from '/home/tripathi/newfolder/basicreact/07reactRouter/src/components/index.js'


function Layout() {
    
  
    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>

      </>
    )
  }
  
  export default Layout