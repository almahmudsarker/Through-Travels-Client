import React, {useState} from 'react';
import { useEffect } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const Places = () => {
    const [params, setParams] = useSearchParams({});
    const category = params.get("category");

    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      fetch("./places.json")
        .then((res) => res.json())
        .then((data) => {
            if (category){
                const filtered = data.filter((place) => place.category === category)
                setPlaces(filtered)
            }else{
                setPlaces(data);
            }
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, [category]);

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            {
                places && places.length > 0 ? (
                    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {
                    places.map((place, index) => (<Card key={index} place={place} />))
                }
            </div>
                ) : (
                    <div className="pt-12">
                        <Heading 
                        title="No Places Available In This Category" 
                        subtitle="Please try another category" 
                        center={true} />
                    </div>
                )
            }
        </Container>
    );
};

export default Places;