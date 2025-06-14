import React from 'react';

const Vedio = () => {
  return (
    <div className="fixed w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z[-10]"
        src="/bg_vedio.mp4"
        alt="test"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Vedio;
