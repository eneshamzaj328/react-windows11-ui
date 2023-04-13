import styled from "styled-components";

import bgVideo from "../assets/images/video.webm";
import windowsBackground from "../assets/images/windows-bg-light.jpg";

const Desktop = () => {
  return (
    <Background>
      <video autoPlay loop={false} muted playsInline controls={false}>
        <source src={bgVideo} type="video/mp4" />
        No wallpaper? Please add some new Wallpapers.
      </video>
    </Background>
  );
};

const Background = styled.section`
  position: relative;
  min-height: 100vh;
  background: url(${windowsBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
  z-index: 1500;

  video {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: contain; // cover
    pointer-events: none;
  }

  @media (max-width: 1700px) {
    position: relative;

    video {
      height: auto;
    }
  }
`;

export default Desktop;
