import { useState } from 'react'
import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard'


function App() {
  return (
    <section className="App">
      <TwitterFollowCard  userName="Reddit" initialIsFollowing={true} >
        RedditOnTwitter
      </TwitterFollowCard>
      <TwitterFollowCard  userName="Alphose" initialIsFollowing={true}>
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
