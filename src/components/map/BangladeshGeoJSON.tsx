import React, { useState } from "react";
import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";

const selectedStyle = {
  fillColor: "#1abc9c",
  fillOpacity: 0.4,
  color: "#1abc9c",
  weight: 1,
};

interface FeatureProperties {
  id: string;
  // Add any other properties you have in your GeoJSON features
}

interface GeoJSONLayerProps {
  data: any; // Replace 'any' with your specific GeoJSON type
  selectedFeature: string | null;
  onFeatureClick: (featureId: string) => void;
}

const BangladeshGeoJSON: React.FC<GeoJSONLayerProps> = ({
  data,
  selectedFeature,
  onFeatureClick,
}) => {
  const map = useMap();

  const handleClick = (e: L.LeafletMouseEvent) => {
    const layer = e.target;
    const selectedFeatureId = layer.feature.properties.id;
    onFeatureClick(selectedFeatureId);
  };

  const highlightFeature = (e: L.LeafletMouseEvent) => {
    const layer = e.target;
    layer.setStyle(selectedStyle);
  };

  const resetHighlight = (e: L.LeafletMouseEvent) => {
    const layer = e.target;
    const featureId = layer.feature.properties.id;
    if (featureId !== selectedFeature) {
      layer.setStyle(originalStyle);
    }
  };

  const originalStyle = {
    fillColor: "gray",
    fillOpacity: 0.4,
    color: "black",
    weight: 1,
  };

  const geoJSONStyle = (feature: any) => {
    const featureId = feature.properties.id;
    return featureId === selectedFeature ? selectedStyle : originalStyle;
  };

  return (
    <GeoJSON
      data={data}
      style={geoJSONStyle}
      onEachFeature={(feature, layer) => {
        layer.on({
          click: handleClick,
          mouseover: highlightFeature,
          mouseout: resetHighlight,
        });
      }}
    />
  );
};

export default BangladeshGeoJSON;
