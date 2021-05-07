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
            <h1>Challenge <br></br> your <br></br> friends!</h1>
          </div>
          <div className="right">
            <WordWheel/>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <h1>Challenge <br></br> your <br></br> friends!</h1>
          </div>
          <div className="right">
            <WordWheel/>
          </div>
        </div>
      </div>
    </div>
  )
}
