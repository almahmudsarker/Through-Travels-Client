import React from 'react';
import Container from '../Shared/Container';

const Banner = () => {
    return (
      <Container>
        <div className="relative">
          {/* <div className="absolute top-[280px] left-[620px] text-center">
            <div className="text-5xl font-bold text-white">Explore The World With Us</div>
            <div className="text-xl font-medium text-white">Find your next destination and make it memorable</div>
          </div> */}
          <img
            className="w-full object-cover rounded-lg"
            src="https://i.ibb.co/Qn9n0yk/hero.png"
            alt="Banner image"
          />
        </div>
      </Container>
    );
};

export default Banner;