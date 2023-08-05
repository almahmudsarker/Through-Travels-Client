import React from 'react';
import Heading from '../Heading/Heading';

const Header = ({placeData}) => {
  return (
    <>
      <Heading title={placeData.title} subtitle={placeData.location} />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={placeData.image}
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;