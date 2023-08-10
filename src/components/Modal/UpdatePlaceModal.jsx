import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { imageUpload } from "../../api/utils";
import UpdatePlaceForm from "../Forms/UpdatePlaceForm";
import { toast } from "react-hot-toast";
import { updatePlace } from "../../api/places";

const UpdatePlaceModal = ({ isOpen, setIsEditModalOpen, refetch, place, id }) => {
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(place.from),
    endDate: new Date(place.to),
    key: "selection",
  });
  const [placeData, setPlaceData] = useState(place);

  const handleImageUpdate = (image) => {
    setLoading(true);
    imageUpload(image)
      .then((res) => {
        setPlaceData({ ...placeData, image: res.data.display_url });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(placeData);
    const updatedData = Object.assign({}, { ...placeData });
    delete updatedData._id;
    setLoading(true);
    updatePlace(updatedData, id)
      .then((data) => {
        console.log(data);
        toast.success("Place info updated");
        setLoading(false);
        refetch();
        setIsEditModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleDates = (ranges) => {
    setDates(ranges.selection);
    setPlaceData({
      ...placeData,
      to: ranges.selection.endDate,
      from: ranges.selection.startDate,
    });
  };
  console.log(placeData);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsEditModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update Place Info
                </Dialog.Title>
                {/* Update form */}
                <UpdatePlaceForm 
                handleSubmit={handleSubmit}
                placeData={placeData}
                setPlaceData={setPlaceData}
                handleImageUpdate={handleImageUpdate}
                dates={dates}
                handleDates={handleDates}
                loading={loading}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdatePlaceModal;
