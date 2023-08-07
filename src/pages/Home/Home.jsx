import React from 'react';
import Categories from '../../components/Categories/Categories';
import Places from '../../components/Places/Places';
import Banner from '../../components/Banner/Banner';
import Payment from '../../components/Payment/Payment';

const Home = () => {
    return (
        <>
          <Banner />
          <Categories />
          <Places />
          <Payment />
        </>
    );
};

export default Home;