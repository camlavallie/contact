import React from 'react'

export default function Footer() {
  return (
      <nav 
        style={{marginTop:'30px'}}
        className="navbar navbar bg-light">
          <a 
            className="navbar-brand" 
            href="https://github.com/camlavallie/contact">

            <h3 
            style={{
              padding:'10px', 
              margin:'10px'
              }}>
              Source Code!
            </h3>            
           </a>
           <h4 style={{ 
             color:'lightgrey', 
             padding:'10px', 
             margin:'10px'}}> 
             Copyright &copy; {new Date().getFullYear()} CAM</h4>
        </nav>
  )
}
