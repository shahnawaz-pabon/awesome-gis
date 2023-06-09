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
import bangladesh from "../../data/bangladesh.json";
import cities from "../../data/bd-cities.json";
import divisions from "../../data/bd-divisions.json";
import BangladeshCities from "./BangladeshCities";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers";

var placeIcon = L.AwesomeMarkers.icon({
  icon: "fa-flag",
  prefix: "fa",
  markerColor: "red",
  iconColor: "white",
});

var divisionIcon = L.AwesomeMarkers.icon({
  icon: "fa-bank",
  prefix: "fa",
  markerColor: "orange",
  iconColor: "white",
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
  const [bdCities, setBdCities] = useState<any>(null);
  const [bdDivisions, setBdDivisions] = useState<any>(null);

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(featureId);
  };

  useEffect(() => {
    const fetchGeoJSONData = async () => {
      try {
        setGeoJSONData(bangladesh);
        setBdCities(cities);
        setBdDivisions(divisions);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchGeoJSONData();
  }, []);

  useEffect(() => {
    console.log("bdDivisions");
    console.log(bdDivisions);
  }, [bdDivisions]);

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
        style={{ height: "91vh" }}
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

          {bdDivisions &&
            bdDivisions.map((division: any) => {
              return (
                <Marker
                  key={division.id}
                  position={[division.lat, division.long]}
                  icon={divisionIcon}
                >
                  <Popup>
                    <h4>{division.name}</h4>
                  </Popup>
                </Marker>
              );
            })}

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

          {/* Start | Bangladesh's GeoJSON */}
          <LayersControl.Overlay checked={false} name="Show Bangladesh's area">
            {geoJSONData && (
              <BangladeshGeoJSON
                data={geoJSONData}
                selectedFeature={selectedFeature}
                onFeatureClick={handleFeatureClick}
              />
            )}
          </LayersControl.Overlay>
          {/* End | Bangladesh's GeoJSON */}

          {/* Start | Bangladesh's Cities */}
          <LayersControl.Overlay checked={false} name="Bangladesh's cities">
            {bdCities && <BangladeshCities citiesData={bdCities} />}
          </LayersControl.Overlay>
          {/* End | Bangladesh's Cities */}
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
      </MapContainer>
    </div>
  );
};
