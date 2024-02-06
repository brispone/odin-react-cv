import { useState } from 'react'
import './App.css'
import General from './components/General';
import Education from  './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';

function App() {

  return (
    <>
        <div className="formsDiv">
          <General />
          <Education />
          <Work />
          <Skills />
        </div>
    </>
  )
}

export default App
