import Head from 'next/head'
import Image from 'next/image'
import Logo from '../comps/Logo'
import WordWheel from '../comps/WordWheel'

export default function Home() {
  return (
    <div className="main">
      <div className="content">
        <Logo />
        <div className="row">
          <div className="left">
            <h1>Challenge your friends!</h1>
          </div>
          <div className="right">
            
          </div>
          <WordWheel/>
        </div>
      </div>
      
      
    </div>
  )
}
