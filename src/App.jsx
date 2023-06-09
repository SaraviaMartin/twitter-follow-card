import { useState } from 'react'
import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard'


function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={true} userName="Reddit" name="RedditOnTwitter" />
      <TwitterFollowCard isFollowing={true} userName="Alphose" name="Juan Martin Saravia" />
      <TwitterFollowCard isFollowing={true} userName="Goku" name="Goku Oficial" />
      <TwitterFollowCard isFollowing={true}userName="billgates" name="Bill Gates" />
    </section>
    
  )
}

export default App
