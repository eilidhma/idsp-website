import Head from 'next/head'
import Image from 'next/image'
import Logo from '../comps/Logo'
import WordWheel from '../comps/WordWheel'
import Switch from '../comps/Switch'
import React, {useState} from 'react';

export default function Home() {
  const [darkstate, setDark] = useState(false)
  
  const HandleSwitch = () => {
    setDark(!darkstate)
  }

  return (
    <div id="m" className="main" background={darkstate ? "linear-gradient(180deg, #5177FF 0%, #55C2FF 100%)" : "linear-gradient(180deg, #FF85DD 0%, #FFA4E5 100%)"}>
      <div className="content">
        <Logo />
        <Switch 
        backgroundColor={darkstate ? "FFA4E5" : "#5177FF"}
        left={darkstate === true ? 28 : 2}
        onClick={HandleSwitch}
        />
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
            <h1>Challenge <br></br> your friends!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultricies libero. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Pellentesque vitae nisi pharetra, hendrerit est at, euismod neque. Nam aliquet scelerisque justo ut pellentesque. Morbi eget lacus vitae felis finibus dictum. Morbi tempus ipsum ex. Etiam pharetra est a diam finibus aliquet. Integer blandit bibendum mi, quis ornare tortor tincidunt sit amet. Aliquam erat volutpat.</p>
          </div>
          <div className="right">
            <img src="feed.svg" width="70%"/>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <img src="dancer.svg" width="70%"/>
          </div>
          <div className="right">
            <h1>Record Video!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultricies libero. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Pellentesque vitae nisi pharetra, hendrerit est at, euismod neque. Nam aliquet scelerisque justo ut pellentesque. Morbi eget lacus vitae felis finibus dictum. Morbi tempus ipsum ex. Etiam pharetra est a diam finibus aliquet. Integer blandit bibendum mi, quis ornare tortor tincidunt sit amet. Aliquam erat volutpat.</p>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <h1>Start a challenge!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultricies libero. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Pellentesque vitae nisi pharetra, hendrerit est at, euismod neque. Nam aliquet scelerisque justo ut pellentesque. Morbi eget lacus vitae felis finibus dictum. Morbi tempus ipsum ex. Etiam pharetra est a diam finibus aliquet. Integer blandit bibendum mi, quis ornare tortor tincidunt sit amet. Aliquam erat volutpat.</p>
          </div>
          <div className="right">
            <img src="challenges.svg" width="70%"/>
          </div>
        </div>
        <div>
          <h1>See it in action</h1>
          <img src="placeholder.svg" width="90%"/>
        </div>
      </div>
    </div>
  )
}
