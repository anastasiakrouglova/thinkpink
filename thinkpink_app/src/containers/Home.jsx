import React from "react";
import styles from "./Home.module.css";
import NavbarDark from "../components/NavbarDark.jsx";
import Video from "../components/Video.jsx"

import { render } from 'react-dom'
import { VideoScroll } from 'react-video-scroll'

import { Controller, Scene } from "react-scrollmagic";

// const setStyles = (wrapperEl, videoEl, playbackRate) => {
//   wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
//   wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
// }

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}><NavbarDark className={styles.navbar} /></div>
      <p className={styles.title}>Race For The Cure</p>
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Video progress={progress}/>
              </div>
            )}
          </Scene>
      </Controller>  
      {/* <VideoScroll
        // onLoad={props =>
        //   setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
        // }
        playbackRate={30}
        style={{ position: 'sticky' }}
      >
        <video className={styles.section}
          tabIndex="0"
          autobuffer="autobuffer"
          preload="preload"
          // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          playsInline
        >
          <source type="video/mp4" src="../assets/video/test.mp4" />
        </video>
      </VideoScroll> */}
    
      {/*
      <button className="App-button_primair">Primaire button</button>
      <a class={styles.play_btn} href="#"></a> */}
    </div>
  );
};

export default Home;