import React from 'react'
import Header from './header'
import Footer from './footer'


export default function DefaultLayout({children}) {
  return (
    <>
       <Header />
      <div className="container mx-auto pt-16">
        <div className="content">{children}</div>
      </div>
      <Footer />
      </>
  )
}
