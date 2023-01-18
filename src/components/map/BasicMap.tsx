import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

export const BasicMap = () => {
  const defaultPosition: LatLngExpression = [
    23.727785445600595, 90.41076504068958,
  ]; // Bangladesh

  return (
    <div className="map-container">
      <MapContainer
        center={defaultPosition}
        zoom={7}
        id="my-map"
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
