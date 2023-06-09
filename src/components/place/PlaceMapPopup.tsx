const PlaceMapPopup = ({ data }: any) => {
  console.log(data.position);
  return (
    <>
      <p className="place-popup-title">
        {data.title !== undefined ? data.title : ""}
      </p>
      <img
        className="popup-image"
        src={data.picture ? data.picture : "/assets/preview.png"}
      />
      {/* <p className="m-0 mt-5 font-size-15">
        <b>Name:</b> {data.title !== undefined ? data.title : ""}
      </p>
      <p className="m-0 mt-5 font-size-15">
        <b>Latitude:</b> {data.position[0] || ""}, <b>Longitude:</b>{" "}
        {data.position[1] || ""}
      </p>
      <p className="m-0 mt-5 font-size-15">
        <b>Description:</b> {data.description || ""}
      </p> */}
      <p className="place-see-more">
        <b>See More:</b>{" "}
        <a href={data.seeMoreLink || ""}>{data.seeMoreLink || ""}</a>
      </p>
    </>
  );
};

export default PlaceMapPopup;
