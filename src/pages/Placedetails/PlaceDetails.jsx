import React from 'react';
import Container from '../../components/Shared/Container';
import Header from '../../components/Places/Header';
import PlaceInfo from '../../components/Places/PlaceInfo';
import PlaceReservation from '../../components/Places/PlaceReservation';
import { useLoaderData } from 'react-router-dom';

const PlaceDetails = () => {
  const placeData = useLoaderData();
    return (
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <Header placeData={placeData} />
            <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
              <PlaceInfo placeData={placeData} />
              <div className="mb-10 md:col-span-3 order-first md:order-last">
                <PlaceReservation placeData={placeData} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default PlaceDetails;