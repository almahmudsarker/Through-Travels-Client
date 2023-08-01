import React from 'react';
import Categories from '../../components/Categories/Categories';
import Places from '../../components/Places/Places';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <>
          <Banner />
          <Categories />
          <Places />
        </>
    );
};

export default Home;