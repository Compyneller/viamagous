import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import { VideoSource } from "../../context/VideoContext";

const VideoPlayer = () => {
  const { src } = useContext(VideoSource);
  return <ReactPlayer controls={true} width="100%" url={src} height={700} />;
};

export default VideoPlayer;
