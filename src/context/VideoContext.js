import React, { useState } from "react";
import { createContext } from "react";
import { videoData } from "../config/videos-data";
export const VideoSource = createContext();

const VideoContext = ({ children }) => {
  const [src, setSrc] = useState(videoData[0].url);
  return (
    <VideoSource.Provider value={{ src, setSrc }}>
      {children}
    </VideoSource.Provider>
  );
};

export default VideoContext;
