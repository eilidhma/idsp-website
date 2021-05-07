import Head from 'next/head'
import Image from 'next/image'
import Logo from '../comps/Logo'

export default function Home() {
  return (
    <div className="main">
      <Logo />
      <h1>Challenge your friends!</h1>
    </div>
  )
}
