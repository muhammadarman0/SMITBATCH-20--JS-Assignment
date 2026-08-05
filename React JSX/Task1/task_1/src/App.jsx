import { useState } from 'react'
import webLogo from './assets/web.png'
import msLogo from './assets/ms.png'

import './App.css'

function App() {

  return (
    <>
      {/* navbar */}
      <nav>
        <div className="userName">
          <div className="itmes">
            <h2>Muhammad Arman</h2>
          </div>
          <div className="contacts">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
      {/* card */}
      <section>
        <div className="card">
          <div className="course">
            <img src={webLogo} alt="" srcset="" width={200} height={200} />
            <div className="inf_course">
              <h3>Web Development</h3>
            </div>
          </div>
          <div className="course">
            <img src={msLogo} alt="" srcset="" width={200} height={200} />
            <div className="inf_course">
              <h3>MS Office</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
