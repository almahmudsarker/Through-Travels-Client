//Add a place
export const addPlace = async placeData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/places`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(placeData),
    })
    const data = await response.json()
    return data
}

// Get all places
export const getAllPlaces = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/places`)
    const data = await response.json()
    return data
}

// Get filtered places for hosts
export const getPlaces = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/places/${email}`)
    const data = await response.json()
    return data
}

// Get a single place
export const getPlace = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/place/${id}`)
    const data = await response.json()
    return data
}

//delete a Place
export const deletePlace = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/places/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}