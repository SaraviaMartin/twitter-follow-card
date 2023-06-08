import { useState } from 'react'
import "./App.css"


function App() {


  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/reddit.com" alt="avatar random" />
        <div className='tw-followCard-info'>
          <strong>Reddit</strong>
          <span className='tw-followCard-infoUserName'>@redditontwitter</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default App
