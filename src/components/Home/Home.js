import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { meal } from "../../constants";

const HomePage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--color-black);
`;

const HomeBorder = styled.hr`
  color: transparent;
  background-color: black;
  padding: 0 3rem;
  z-index: 80;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  @media (max-width: 650px) {
    width: auto;
    background-color: black;
  }
`;

const HomeHeader = styled.h1`
  font-family: var(--font-base);
  display: flex;
  background-color: var(--color-black);
  color: white;
  justify-content: center;
  margin: 0 0 -1rem 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 4rem;
  letter-spacing: 0.04em;
  @media (max-width: 650px) {
    font-size: 2.2rem;
    padding: 0.5rem;
    text-align: center;
    line-height: auto;
  }
`;

const HomeVideo = styled.video`
  height: 90%;
  margin-top: 0;
  padding-top: 0;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

const VideoOverlay = styled.div`
  background: rgba(28, 27, 27, 0.5);
  height: 90%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

const Container = styled.div`
  width: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 10vh;
  font-family: var(--font-alt);
  color: var(--color-white);

  @media (max-width: 650px) {
    margin-top: 3vh;
  }
`;

const NewStamp = styled.div`
  font-size: 2.5rem;
  font-weight: 100;
  width: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #f09b50;
  border-radius: 10%;
  padding: 0.2rem;
  margin: auto;
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const NewTitle = styled.div`
  font-size: 4rem;
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 650px) {
    text-align: center;
    font-size: 2em;
    padding: 1rem;
  }
`;

const NewDescription = styled.div`
  font-size: 1.5rem;
  display: flex;
  width: auto;
  min-width: 60%;
  text-align: center;
  justify-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1rem;
  margin: 0 2rem;
  line-height: 2rem;
  @media (max-width: 650px) {
    font-size: 1.2rem;
  }
`;

const OrderButton = styled.button`
  cursor: pointer;
  justify-content: center;
  display: block;
  text-transform: uppercase;
  width: auto;
  background-color: #bf0008;
  font-size: 1.5rem;
  color: white;
  border-style: none;
  padding: 0.9rem 5rem;
  font-family: var(--font-alt);
  letter-spacing: 0.07em;
  flex: 1;
  margin-top: 6vh;
  @media (max-width: 1150px) {
    margin-top: 2vh;
  }
  @media (max-width: 650px) {
    margin-top: 0rem;
  }
`;

const Home = () => {
  const vidRef = React.useRef();
  return (
    <HomePage>
      <HomeBorder></HomeBorder>
      <HomeHeader>Poblano's Grill</HomeHeader>
      <div>
        <HomeVideo
          autoPlay
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <VideoOverlay>
          <Container>
            <NewStamp>NEW</NewStamp>
            <NewTitle>Garlic Guajillo Steak</NewTitle>
            <NewDescription>
              Tender cuts of steak seasoned and grilled to lock in the flavors
              of garlic and guajillo peppers, then finished with lime and
              cilantro.
            </NewDescription>
            <div>
              <Link to="/orderpage">
                <OrderButton>Order Now</OrderButton>
              </Link>
            </div>
          </Container>
        </VideoOverlay>
      </div>
    </HomePage>
  );
};

export default Home;
