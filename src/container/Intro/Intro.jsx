import React, { useState, useRef } from 'react';
import './Intro.css';
import { BsFillPlayBtnFill, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { meal } from '../../constants';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false)
  const vidRef = useRef();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }
  return (    
    <div className='app__video'>
        <video
          src={ meal }
          type="video/mp4"
          ref={vidRef}
          loop
          controls={false}
          muted
        />
        <div className="app__video-overlay flex__center">
          <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
            {playVideo ? <BsPauseFill className='app__video-btn' fontSize={30} /> : <BsPlayFill className='app__video-btn' fontSize={30} /> }
          </div>
        </div>
    </div>      
  );
}

export default Intro;
