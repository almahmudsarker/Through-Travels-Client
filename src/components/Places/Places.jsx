import React, {useState} from 'react';
import { useEffect } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader';

const Places = () => {
    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('./places.json')
        .then(res => res.json())
        .then(data => {
            setPlaces(data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {
                    places.map((place, index) => (<Card key={index} place={place} />))
                }
            </div>
        </Container>
    );
};

export default Places;