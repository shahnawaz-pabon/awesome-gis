// import React, { useState } from "react";
import { Marker, Popup, LayerGroup } from "react-leaflet";

import "leaflet.awesome-markers/dist/leaflet.awesome-markers";

import L from "leaflet";

var cityIcon = L.AwesomeMarkers.icon({
  icon: "fa-building",
  prefix: "fa",
  markerColor: "cadetblue",
  iconColor: "white",
});

interface CityData {
  city: string;
  lat: number;
  lng: number;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: string;
  population_proper: string;
}

const BangladeshCities = ({ citiesData }: { citiesData: CityData[] }) => {
  const markers = citiesData.map((city) => (
    <Marker key={city.city} position={[city.lat, city.lng]} icon={cityIcon}>
      <Popup>
        <h3>{city.city}</h3>
        <p>Country: {city.country}</p>
        <p>Population: {city.population}</p>
      </Popup>
    </Marker>
  ));
  return citiesData ? <LayerGroup>{markers}</LayerGroup> : null;
};

export default BangladeshCities;
