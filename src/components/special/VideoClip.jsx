import React from 'react';
import YouTube from 'react-youtube';

const VideoClip = () => {
  const options = {
    height: '400',
    width: '800',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const handleReady = (event) => {
    event.target.pauseVideo();
  };

  return <YouTube videoId='NIk1-ck4c6Q' opts={options} onReady={handleReady} className="flex justify-center p-10"/>;
};

export default VideoClip;
