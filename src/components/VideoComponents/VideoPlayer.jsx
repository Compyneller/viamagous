import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { VideoSource } from "../../context/VideoContext";

const VideoPlayer = () => {
  const { src } = useContext(VideoSource);
  return <ReactPlayer controls={true} width="100%" url={src} height={700} />;
};

export default VideoPlayer;
