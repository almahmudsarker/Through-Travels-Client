import React from 'react';
import Container from '../Shared/Container';
import video from '../../assets/video/video (1080p).mp4';

const Banner = () => {
    return (
      <Container>
        <div className="relative">
          {/* <div className="absolute top-[280px] left-[620px] text-center">
            <div className="text-5xl font-bold text-white">Explore The World With Us</div>
            <div className="text-xl font-medium text-white">Find your next destination and make it memorable</div>
          </div> */}
          {/* <img
            className="w-full object-cover rounded-lg"
            src="https://i.ibb.co/Qn9n0yk/hero.png"
            alt="Banner image"
          /> */}

          <video
            className="w-full h-96 object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
          
        </div>
      </Container>
    );
};

export default Banner;