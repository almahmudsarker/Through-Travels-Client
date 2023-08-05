const PlaceInfo = ({ placeData }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {placeData.host.name}</div>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={placeData.host.image}
          />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>{placeData.guests} guests</div>
          <div>{placeData.bedrooms} rooms</div>
          <div>{placeData.bathrooms} bathroom</div>
        </div>
      </div>

      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {placeData.description}
      </div>
      <hr />
    </div>
  );
};

export default PlaceInfo;
