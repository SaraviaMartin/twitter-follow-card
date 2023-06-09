import { useState } from 'react'
import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard'


function App() {
  return (
    <section className="App">
      <TwitterFollowCard  userName="Reddit" >
        RedditOnTwitter
      </TwitterFollowCard>
      <TwitterFollowCard  userName="Alphose">
        Juan Martin Saravia
      </TwitterFollowCard>
      <TwitterFollowCard  userName="Goku">
        Goku Oficial
      </TwitterFollowCard>
      <TwitterFollowCard userName="billgates" >
        Bill Gates
      </TwitterFollowCard>

    </section>
    
  )
}

export default App
