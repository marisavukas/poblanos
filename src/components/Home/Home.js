import React, { useState } from "react";
import "./Home.css";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import { Link } from "react-router-dom";
import { Footer } from "../../container";

const Home = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  return (
    <div className="homepage">
      <hr className="home_hr"></hr>
      <h1 className="home_header">Poblano's Grill</h1>
      <div className="overlay__video">
        <div className="app_video">
          <video
            autoPlay
            ref={vidRef}
            src={meal}
            type="video/mp4"
            loop
            controls={false}
            muted
          />
          <div className="app__video-overlay flex-center">
            <div></div>
            <div className="new_section_and_order_button">
              <div className="new_stamp">NEW</div>
              <div className="new_steak">Garlic Guajillo Steak</div>

              <div className="new_steak_description">
                Tender cuts of steak seasoned and grilled to lock in the flavors
                of garlic and guajillo peppers, then finished with lime and
                cilantro.
              </div>
              <div className="order_now_button_container">
                <Link to="/orderpage">
                  <button className="order_now_button">Order Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
