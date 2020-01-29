import React, {Component} from "react";
import { Controller, Scene } from "react-scrollmagic";
import { render } from "react-dom";


class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 50
        };
    }
    
    componentDidMount() {
        //this.setState({ video: document.getElementById('video-player') })
        console.log(this.state.progress);
        let myVideo = document.getElementById('video-player')

        myVideo.currentTime = 0
        console.log(myVideo.currentTime)
    }

    componentDidUpdate() {
        let scrollpos = 0;
        let accelamount = 0.1;
        let delay = 5

        scrollpos = window.scrollY ;
        console.log('scrollpos' + scrollpos)
        let myVideo = document.getElementById('video-player')

        //myVideo.currentTime = scrollpos / 100
        //console.log(scrollpos)
        
        //console.log('currentTime' + myVideo.currentTime)

        // setInterval(() => {
        //     //myVideo.currentTime = delay / 100
        //     delay += (scrollpos - delay) * accelamount;
        //     console.log(scrollpos, delay);
        //     myVideo.currentTime = delay / 100;
        //     console.log(myVideo.currentTime)
        // }, 41600)

        delay += (scrollpos - delay) * accelamount;
        console.log(scrollpos, delay);
        myVideo.currentTime = delay /10;
        console.log(myVideo.currentTime)
        
        // 33,3 = 1000/framerate video (24)
    }
    
    
// componentDidUpdate(prevProps, prevState) {
//         if(prevState.video !== this.state.video) { // this.state.video is updated
//            // That is the place where you can access into valid this.videoRef
//             console.log('lalal')
//         }
//       }

render() {
    const { progress } = this.state;
    const videoref = React.createRef();
    //console.log(videoref);
    return (
        <div>
            <video ref={videoref} id="video-player" src="../assets/video/test.mp4"></video>
        </div>
    )
}
}
// const Video = ({ progress }) => {
//     // Video animation
//     let accelamount = 0.1;
//     let scrollpos = 0;
//     let delay = 0;

//     const videoref = React.createRef();

//     const getScrollPos = (e) => {
//         console.log(videoref.currentTime);

//         scrollpos = window.scrollY;
//         console.log(scrollpos);
//     }
//     getScrollPos()
//     console.log(scrollpos);
//     return (
//         <div>
//             <video ref={videoref} src="../assets/video/test.mp4"></video>
//         </div>
//     )
// }

export default Video