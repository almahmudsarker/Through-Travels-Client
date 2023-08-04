import React, { useContext, useState } from 'react';
import AddPlaceForm from '../../components/Forms/AddPlaceForm';
import { imageUpload } from '../../api/utils';
import { AuthContext } from '../../providers/AuthProvider';
import { addPlace } from '../../api/places';

const AddPlace = () => {

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    })
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image")

    //handle form submit
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const location = event.target.location.value
        const category = event.target.category.value
        const title = event.target.title.value
        const description = event.target.description.value
        const price = event.target.price.value
        const total_guest = event.target.total_guest.value
        const bedrooms = event.target.bedrooms.value
        const bathrooms = event.target.bathrooms.value
        const from = dates.startDate
        const to = dates.endDate
        const images = event.target.image.files[0]

        // Upload image to IMGBB
        imageUpload(images)
        .then(data => {
            const placeData = {
                image: data.data.display_url,
                location,
                title,
                host: {
                    name: user?.displayName,
                    image: user?.photoURL,
                    email: user?.email,
                },
                category,
                description,
                price: parseFloat(price),
                total_guest,
                bedrooms,
                bathrooms,
                from,
                to,
            };

            //post place data to backend
            addPlace(placeData)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err.message)
            })
            
            setLoading(false)
        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
        })
    }

    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    }

    const handleDates = (ranges) => {
        setDates(ranges.selection)
    }

    return (
        <AddPlaceForm 
        handleDates={handleDates}
        dates={dates}
        handleSubmit={handleSubmit} 
        loading={loading} 
        handleImageChange={handleImageChange} 
        uploadButtonText={uploadButtonText} />
    );
};

export default AddPlace;