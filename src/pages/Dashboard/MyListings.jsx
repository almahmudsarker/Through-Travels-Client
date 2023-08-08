import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { getPlaces } from "../../api/places";
import PlaceDataRow from "../../components/Dashboard/PlaceDataRow";
import EmptyState from "../../components/Shared/EmptyState";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyListings = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    // const [places, setPlaces] = useState([])
    // const fetchPlaces = () => 
    // axiosSecure
    //     .get(`/places/${user?.email}`)
    //     .then(data => setPlaces(data.data))
    //     .catch(err => console.log(err))

    // useEffect(() => {
    //     fetchPlaces()
    // }, [user])

    const { data: places = [], refetch } = useQuery({
      queryKey: ['places', user?.email],
      enabled: !loading,
      queryFn: async () => {
       const res = await axiosSecure.get(`/places/${user?.email}`)
        return res.data
      },
    })


  return (
    <>
      {places && Array.isArray(places) && places.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {places &&
                      places.map((place) => (
                        <PlaceDataRow
                          key={place._id}
                          place={place}
                          refetch={refetch}
                          // fetchPlaces={fetchPlaces}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          message="No Place Data Available!"
          address="/dashboard/add-place"
          label="Add Place"
        />
      )}
    </>
  );
};

export default MyListings;
