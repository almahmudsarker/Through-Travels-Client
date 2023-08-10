import React, { useContext, useState } from 'react';
import Calender from '../Places/Calender';
import Button from '../Button/Button';
import { AuthContext } from '../../providers/AuthProvider';
import BookingModal from '../Modal/BookingModal';
import formatDistance from "date-fns/formatDistance";
import { addBooking, updateStatus } from '../../api/bookings';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const PlaceReservation = ({ placeData }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  const {user, role} = useContext(AuthContext)
//Price calculation
  const totalPrice = parseFloat(
    formatDistance(new Date(placeData.to), new Date(placeData.from)).split(
      ''
    )[0]
  ) * placeData.price


 const [value, setValue] = useState({
    startDate: new Date(placeData?.from),
    endDate: new Date(placeData?.to),
    key: "selection",
 })

  //Booking info state
  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: placeData.host.email,
    location: placeData.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: placeData.title,
    placeId: placeData._id,
    image: placeData.image,
  })

  const handleSelect = (ranges) => {
    setValue({ ...value })
  }

  // const modalHandler = () => {
  //   addBooking(bookingInfo)
  //   .then((data) => {
  //     console.log(data)
  //     updateStatus(placeData._id, true)
  //     .then(data => {
  //       toast.success("Booking successful!")
  //       navigate("/dashboard/my-bookings")
  //       closeModal()
  //     })
  //     .catch(err => console.log(err))
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //     closeModal()
  //   })
  //   console.log("modalHandler");
  // }

  return (
    <div className="bg-white rounded-xl border-[1px]  border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {placeData.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender handleSelect={handleSelect} value={value} />
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={placeData.host.email === user.email || placeData.booked}
          label="Reserve"
        />
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between font-semibold text-lg p-4">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        bookingInfo={bookingInfo}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default PlaceReservation;