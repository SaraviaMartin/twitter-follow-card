import { useState } from 'react'
import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName:'Reddit',
    name: 'Reddit',
    initialIsFollowing: false
  },
  {
    userName:'Alphose',
    name: 'Juan Martin Saravia',
    initialIsFollowing: true
  },
  {
    userName:'SatoshiOficial',
    name: 'Satoshi Nakamoto',
    initialIsFollowing: false
  },
  {
    userName:'elonmusk',
    name: 'Elon Musk',
    initialIsFollowing: true
  },
]

function App() {
  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
      }
    </section>   
  )
}

export default App
