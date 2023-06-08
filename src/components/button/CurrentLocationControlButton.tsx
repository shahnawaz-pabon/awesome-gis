import React, { useEffect, useState } from "react";
import { Circle, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-easybutton";
import "leaflet-easybutton/src/easy-button.css";
import L, { LatLngExpression } from "leaflet";

const CurrentLocationControlButton = ({ icon, title }: any) => {
  const map = useMap();
  var ranonce = false;
  const defaultPosition: LatLngExpression = [
    23.727785445600595, 90.41076504068958,
  ];
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);
  const greenOptions = { color: "#1ABC9C" };
  const [radius, setRadius] = useState(1000);
  const [center, setCenter] = useState();
  const [showCircleArea, setshowCircleArea] = useState(false);

  // const currentLocationIcon = L.icon({
  //   iconSize: [35, 35],
  //   // iconAnchor: [10, 41],
  //   // popupAnchor: [2, -40],
  //   iconUrl: "./assets/location-pin.png",
  //   // shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
  // });

  var currentLocationIcon = L.AwesomeMarkers.icon({
    icon: "fa-crosshairs",
    prefix: "fa",
    markerColor: "blue",
    iconColor: "white",
  });

  useEffect(() => {
    if (!map) return;

    if (!ranonce) {
      L.easyButton({
        position: "topright",
        states: [
          {
            stateName: "zoom-to-current-location", // name the state
            icon: icon, // and define its properties
            title: title, // like its title
            onClick: function (btn, map) {
              btn.state("back-to-the-map");
              map.locate().on("locationfound", function (e: any) {
                setPosition(e.latlng);
                setshowCircleArea(true);
                // const radius = e.accuracy;
                // const circle = L.circle(e.latlng, radius);
                // circle.addTo(map);
                setCenter(e.latlng);
                setBbox(e.bounds.toBBoxString().split(","));
                map.flyTo(e.latlng, 15);
              });
            },
          },
          {
            stateName: "back-to-the-map",
            icon: "fa-solid fa-map-location-dot",
            title: "back to the map",
            onClick: function (btn, map) {
              setshowCircleArea(false);
              btn.state("zoom-to-current-location");
              map.flyTo(defaultPosition, 6);
            },
          },
        ],
      }).addTo(map);

      ranonce = true; // For rendering only once when map changed
    }
  }, [map]);

  // useEffect(() => {
  //   controlButton.addTo(map);
  // }, []);

  return (
    <>
      {showCircleArea && position && (
        <Circle
          className="radius-circle"
          center={position}
          pathOptions={greenOptions}
          radius={radius}
        >
          <Marker position={position} icon={currentLocationIcon}>
            <Popup>
              You are here. <br />
              Map bbox: <br />
              <b>Southwest lng</b>: {bbox[0]} <br />
              <b>Southwest lat</b>: {bbox[1]} <br />
              <b>Northeast lng</b>: {bbox[2]} <br />
              <b>Northeast lat</b>: {bbox[3]}
            </Popup>
          </Marker>
        </Circle>
      )}
    </>
  );
};

export default CurrentLocationControlButton;
