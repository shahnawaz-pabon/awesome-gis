import {
  MapContainer,
  TileLayer,
  LayerGroup,
  LayersControl,
  Marker,
  Tooltip,
  Popup,
  useMap,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { data } from "../../constants/places";
import { Place } from "../../constants/models";
import L from "leaflet";
import PlaceMapPopup from "../place/PlaceMapPopup";
import CurrentLocationControlButton from "../button/CurrentLocationControlButton";
import { useSelector, useDispatch } from "react-redux";
import DefaultModal from "../modal/DefaultModal";
import { setSelectedPlace } from "../../store/reducers/placesSlice";
import ZoomControlButton from "../button/ZoomControlButton";
import BangladeshGeoJSON from "./BangladeshGeoJSON";
import bar from "../../data/bangladesh.json";

var placeIcon = L.icon({
  iconUrl: "/assets/place-marker.png",
  iconSize: [35, 35], // size of the icon
  //   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  //   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export const BasicMap = () => {
  const dispatch = useDispatch();

  const defaultPosition: LatLngExpression = [
    23.727785445600595, 90.41076504068958,
  ]; // Bangladesh

  const { places, selectedPlace } = useSelector((state: any) => state.places);
  const [showPopUp, setShowPopUp] = useState(true);
  const [showCurrentLocation, setShowCurrentLocation] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [geoJSONData, setGeoJSONData] = useState<any>(null);

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(featureId);
  };

  useEffect(() => {
    const fetchGeoJSONData = async () => {
      try {
        // const response = await fetch(
        //   "https://github.com/fahimreza-dev/bangladesh-geojson/blob/980d8a11db228d49e6aeb6c177f48ae121ac72ab/bangladesh.geojson"
        // );
        // const data = await response.json();
        // const content = atob(data.content);
        // const parsedData = JSON.parse(content);
        setGeoJSONData(bar);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchGeoJSONData();
  }, []);

  useEffect(() => {
    console.log(geoJSONData);
  }, [geoJSONData]);

  useEffect(() => {
    console.log(places);
  }, []);

  const eventHandlers = useMemo(
    () => ({
      dragend(e: any) {
        console.log(e.target.getLatLng());
      },
      click: (e: any) => {
        console.log(e.target);
      },
    }),
    []
  );

  // useEffect(() => {
  // }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={defaultPosition}
        zoom={7}
        id="my-map"
        zoomControl={false}
        style={{ height: "100vh" }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          {/* Satellite View */}
          <LayersControl.BaseLayer name="SatelliteView">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" // google satellite, subdomains={['mt0','mt1','mt2','mt3']}
              // url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' // openstreetmap satellite, subdomains={['a','b','c']}
              maxZoom={18}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
          {/* End of Satellite View */}

          {/* Google Maps */}
          <LayersControl.BaseLayer name="Google Maps">
            <TileLayer
              attribution="Google Maps"
              url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
          </LayersControl.BaseLayer>
          {/* End of Google Maps */}

          {/* Google Maps Satellite */}
          <LayersControl.BaseLayer name="Google Map Satellite">
            <LayerGroup>
              <TileLayer
                attribution="Google Maps Satellite"
                url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
              />
              <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
            </LayerGroup>
          </LayersControl.BaseLayer>
          {/* End of Google Maps Satellite */}

          {/* Streets View */}
          {/* <LayersControl.BaseLayer name="StreetView">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // google street, subdomains={['mt0','mt1','mt2','mt3']}
              maxZoom={18}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer> */}
          {/* End of Streets View */}

          {/* Hybrid View */}
          {/* <LayersControl.BaseLayer name="HybridView">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // google hybrid, subdomains={['mt0','mt1','mt2','mt3']}
              maxZoom={18}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer> */}
          {/* End of Hybrid View */}

          {/* Terrain View */}
          <LayersControl.BaseLayer name="TerrainView">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // google terrain, subdomains={['mt0','mt1','mt2','mt3']}
              maxZoom={18}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
          {/* End of Terrain View */}

          {places.map((place: Place) => (
            <Marker
              key={place.title}
              position={place.position}
              // eventHandlers={{ click: (e) => {eventHandlers(e)}}}
              eventHandlers={eventHandlers}
              icon={placeIcon}
            >
              {/* <Tooltip>{place.title}</Tooltip> */}
              {showPopUp && (
                <Popup minWidth={370}>
                  <PlaceMapPopup data={place} />
                </Popup>
              )}
            </Marker>
          ))}
        </LayersControl>

        {/* Start | User's current location */}
        <CurrentLocationControlButton
          icon="fa-crosshairs fa-lg"
          title="Current Location"
        />
        {/* End | User's current location */}

        {/* Start | Zoom in and Zoom out button */}
        <ZoomControlButton position="topright" />
        {/* End | Zoom in and Zoom out button */}

        {/* Start | Bangladesh's GeoJSON */}

        {geoJSONData && (
          <BangladeshGeoJSON
            data={geoJSONData}
            selectedFeature={selectedFeature}
            onFeatureClick={handleFeatureClick}
          />
        )}
        {/* End | Bangladesh's GeoJSON */}
      </MapContainer>
    </div>
  );
};
