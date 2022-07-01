import React, { useState } from 'react';
import './Home.css';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import {Link} from 'react-router-dom';


const Home = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  return (
    <div className="homepage">
        <h1 className="home_header">Poblano's Grill</h1>
    <div className="overlay__video"> 
    <div className="app_video">
      <video autoPlay
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        />
      <div className="app__video-overlay flex-center">
        <div
          className="app__video-overlay_circle flex-center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
          <button className="order_button"><Link to = "/order">Order</Link></button>


          </div>
      </div>
    </div>

    </div>


  )
}

export default Home;

