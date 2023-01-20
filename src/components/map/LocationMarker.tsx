import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap, Circle } from "react-leaflet";
import L from "leaflet";
const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  const icon = L.icon({
    iconSize: [35, 35],
    // iconAnchor: [10, 41],
    // popupAnchor: [2, -40],
    iconUrl: "/assets/place-marker.png",
    // shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
  });

  useEffect(() => {
    map.locate().on("locationfound", function (e: any) {
      console.log(e);
      console.log(e.accuracy);
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
