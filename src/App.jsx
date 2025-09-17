import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      {/* Top Section */}
      <div className="section">
        <div className="box"></div>
        <div className="peach-box">
          <div className="red-group">
            <div className="inner"></div>
            <div className="inner"></div>
          </div>
        </div>
        <div className="box"></div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div className="left"></div>
        <div className="right">
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="side"></div>
        <div className="center">
          <div></div>
          <div></div>
        </div>
        <div className="side"></div>
      </div>
    </div>
  );
}

export default App;

