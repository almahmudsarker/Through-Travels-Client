import React, { useState } from "react";
import { useEffect } from "react";
import Container from "../Shared/Container";
import Card from "./Card";
import Loader from "../Shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import { getAllPlaces } from "../../api/places";

const Places = () => {
  const [params, setParams] = useSearchParams({});
  const category = params.get("category");

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllPlaces()
      .then((data) => {
        if (category) {
          const filtered = data.filter((place) => place.category === category);
          setPlaces(filtered);
        } else {
          setPlaces(data);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  const [exploreMore, setExploreMore] = useState(false);
  const handleExploreMore = () => {
    setExploreMore(!exploreMore);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      {places && places.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {places.map((place, index) =>
            exploreMore || index < 10 ? (
              <Card key={index} place={place} />
            ) : null
          )}
        </div>
      ) : (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
          <Heading
            title="No Places Available In This Category"
            subtitle="Please try another category"
            center={true}
          />
        </div>
      )}
      <button
        className="bg-[#0ea5e9] text-white font-medium py-3 px-8 rounded-md mt-10 mx-auto block"
        onClick={handleExploreMore}
      >
        {exploreMore ? "Show Less" : "Explore More"}
      </button>
    </Container>
  );
};

export default Places;
