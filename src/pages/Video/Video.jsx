import React from "react";
import RecomendedVideo from "../../components/VideoComponents/RecomendedVideo";
import VideoPlayer from "../../components/VideoComponents/VideoPlayer";
const Video = () => {
  return (
    <div style={{ background: "#0A192F" }}>
      <VideoPlayer />
      <br />
      <br />
      <RecomendedVideo />
    </div>
  );
};

export default Video;
