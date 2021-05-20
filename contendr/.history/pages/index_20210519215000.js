import Head from "next/head";
import Image from "next/image";
import Logo from "../comps/Logo";
import WordWheel from "../comps/WordWheel";
import Switch from "../comps/Switch";
import React, { useState, useEffect } from "react";
import Main from "../comps/Main";
import { PathOne } from "../comps/PathOne";
import { PathTwo } from "../comps/PathTwo";
import AOS from "aos";
import "aos/dist/aos.css";
import { DownloadButton } from "../comps/DownloadButton";
import { Form } from "../comps/Form";
import { Profile } from '../comps/Profile'

export default function Home() {
  const [darkstate, setDark] = useState(false);

  const HandleSwitch = () => {
    setDark(!darkstate);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const [width, setWidth] = useState(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  return (
    <Main
      background={
        darkstate
          ? "linear-gradient(180deg, #5177FF 0%, #55C2FF 100%)"
          : "linear-gradient(180deg, #FF85DD 0%, #FFA4E5 100%)"
      }
    >
      <div className="content">
        <div className="nav">
          <Logo />
          <Switch
            backgroundColor={darkstate ? "#FF85DD" : "#5177FF"}
            left={darkstate ? 28 : 2}
            onClick={HandleSwitch}
          />
        </div>

        <div style={{margin: '10vh 0 0 0', display: 'flex', flexDirection: 'column', }} data-aos="fade-up">
          <div className="row">
            <h1 className="hero-text">
              Challenge <br/> Your <br/> Friends!
            </h1>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between", alignItems: "center", width: '100%'}}>
            
           <img style={{position: 'relative', width: '20vw', animation: 'float 4s ease infinite', zIndex: '0' }} src="/glass-c.png"/>
           <DownloadButton/>

           <WordWheel />
            </div>
          </div>

          
     
        </div>

        <div className="row" data-aos="fade-up">
          <div className="left">
            <h1>Challenge your friends!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac ultricies libero. Nulla facilisi. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. In hac habitasse platea
              dictumst. Pellentesque vitae nisi pharetra, hendrerit est at,
              euismod neque. Nam aliquet scelerisque justo ut pellentesque.
              Morbi eget lacus vitae felis finibus dictum. Morbi tempus ipsum
              ex. Etiam pharetra est a diam finibus aliquet. Integer blandit
              bibendum mi, quis ornare tortor tincidunt sit amet. Aliquam erat
              volutpat.
            </p>
          </div>
          <div className="right">
            <img src="feed.png" width="70%" />
          </div>
          <PathOne
            scrollPosition={scrollPosition}
            text="record a video record a video record a video record a video record a video record a video "
          />
        </div>
        <div className="row reverse" data-aos="fade-up">
          <div className="left">
            <img src="dancer.png" width="70%" />
          </div>
          <div className="right">
            <h1>Record Video!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac ultricies libero. Nulla facilisi. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. In hac habitasse platea
              dictumst. Pellentesque vitae nisi pharetra, hendrerit est at,
              euismod neque. Nam aliquet scelerisque justo ut pellentesque.
              Morbi eget lacus vitae felis finibus dictum. Morbi tempus ipsum
              ex. Etiam pharetra est a diam finibus aliquet. Integer blandit
              bibendum mi, quis ornare tortor tincidunt sit amet. Aliquam erat
              volutpat.
            </p>
          </div>
          <PathOne
            scrollPosition={scrollPosition}
            text="record a video record a video record a video record a video record a video record a video "
          />
        </div>
        <div className="row" data-aos="fade-up">
          <div className="left">
            <h1>Start a challenge!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac ultricies libero. Nulla facilisi. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. In hac habitasse platea
              dictumst. Pellentesque vitae nisi pharetra, hendrerit est at,
              euismod neque. Nam aliquet scelerisque justo ut pellentesque.
              Morbi eget lacus vitae felis finibus dictum. Morbi tempus ipsum
              ex. Etiam pharetra est a diam finibus aliquet. Integer blandit
              bibendum mi, quis ornare tortor tincidunt sit amet. Aliquam erat
              volutpat.
            </p>
          </div>
          <div className="right">
            <img src="challenges.png" width="70%" />
          </div>
          <PathOne
            scrollPosition={scrollPosition}
            text="record a video record a video record a video record a video record a video record a video "
          />
        </div>
        <div data-aos="fade-up">
          <h1>See it in action</h1>
          <video width="100%" controls autostart  src="/ContendrFinal.mp4" type="video/mp4" />
        </div>
        <div className="row" style={{flexDirection: 'column'}} data-aos="fade-up">
         
            <h1>The Team</h1>
            <p>
              Contendr was designed and developed by six BCIT students in an interdisciplinary team. Eilidh, Julian, and Jesse are students in the Digital Design and Development program, and were the creative minds behind the concept. After months of hard work, they passed off their prototype to the talented developers Jojo, Octavio, and Sarah, who are students in the Full Stack Web Development program. In a few short weeks, the development team has created a working product, and  
            </p>
     
          <div style={{ height: '50vh', margin: '5vh 0 0 0 ', display: 'grid', gridTemplateColumns: 'auto auto auto', gridTemplateRows: 'auto auto', justifyContent: 'space-between'}}>

            <Profile name="Jojo" role="Designer" src="/jojo.JPG"/>
            <Profile name="Octavio" role="Developer" src="/octavio.jpg" />
            <Profile name="Sarah" role="Developer" src="/sarah.jpg" />
            <Profile name="Eilidh" role="Designer" src="/eilidh.jpg"/>
            <Profile name="Julian" role="Designer" src="/julian.jpg" />
            <Profile name="Jesse" role="Designer" src="/octavio.jpg" />
       
            
          </div>
        </div>


        <div className="row" style={{flexDirection: 'column'}} data-aos="fade-up">
         
         <h1>Contact Us</h1>
  
  <Form darkstate={darkstate}/>
  
     </div>
      </div>
      
      <footer>
        <img src="icon.svg" width="30vw"></img>
      </footer>
    </Main>
  );
}
