import React from "react";
import { DateRange } from "react-date-range";
import { TbFidgetSpinner } from "react-icons/tb";
import { categories } from "../Categories/categoriesData";
const UpdatePlaceForm = ({
  handleSubmit,
  dates,
  handleDates,
  loading,
  handleImageUpdate,
  placeData,
  setPlaceData,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-600">
              Location
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md "
              name="location"
              value={placeData?.location}
              onChange={(event) =>
                setRoomData({ ...placeData, location: event.target.value })
              }
              id="location"
              type="text"
              placeholder="Location"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              value={placeData?.title}
              onChange={(event) =>
                setPlaceData({ ...placeData, title: event.target.value })
              }
              className="w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md "
              name="title"
              id="title"
              type="text"
              placeholder="Title"
              required
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Category
            </label>
            <select
              onChange={(event) =>
                setPlaceData({ ...placeData, category: event.target.value })
              }
              required
              defaultValue={placeData.category}
              className="w-full px-4 py-3 border-sky-300 focus:outline-sky-500 rounded-md"
              name="category"
            >
              {categories.map((category) => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="location" className="block text-gray-600">
              Select Availability Range
            </label>
            <div className="flex justify-center pt-2">
              <DateRange
                onChange={handleDates}
                ranges={[dates]}
                rangeColors={["#3f96f4"]}
              />
            </div>
          </div>

          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(event) => {
                      handleImageUpdate(event.target.files[0]);
                    }}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-sky-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-sky-500">
                    Upload Image
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                value={placeData?.price}
                onChange={(event) =>
                  setPlaceData({ ...placeData, price: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md "
                name="price"
                id="price"
                type="number"
                placeholder="Price"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="guest" className="block text-gray-600">
                Total guest
              </label>
              <input
                value={placeData?.guests}
                onChange={(event) =>
                  setPlaceData({ ...placeData, guests: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md "
                name="total_guest"
                id="guest"
                type="number"
                placeholder="Total guest"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-600">
                Bedrooms
              </label>
              <input
                value={placeData?.bedrooms}
                onChange={(event) =>
                  setPlaceData({ ...placeData, bedrooms: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md "
                name="bedrooms"
                id="bedrooms"
                type="number"
                placeholder="Bedrooms"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms" className="block text-gray-600">
                Bathrooms
              </label>
              <input
                value={placeData?.bathrooms}
                onChange={(event) =>
                  setPlaceData({ ...placeData, bathrooms: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md "
                name="bathrooms"
                id="bathrooms"
                type="number"
                placeholder="Bathrooms"
                required
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>

            <textarea
              value={placeData?.description}
              onChange={(event) =>
                setPlaceData({ ...placeData, description: event.target.value })
              }
              id="description"
              className="block rounded-md focus:sky-300 w-full h-32 px-4 py-3 text-gray-800  border border-sky-300 focus:outline-sky-500 "
              name="description"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-sky-500"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdatePlaceForm;
