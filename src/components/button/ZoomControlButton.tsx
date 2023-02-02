import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";

const ZoomControlButton = ({ position }: any) => {
  const map = useMap();
  const { zoomIn, zoomOut } = useSelector((state: any) => state.mapPoints);

  useEffect(() => {
    L.control
      .zoom({
        position: position,
      })
      .addTo(map);
  }, [map]);

  useEffect(() => {
    map.zoomIn();
  }, [zoomIn]);

  useEffect(() => {
    map.zoomOut();
  }, [zoomOut]);

  return null;
};

export default ZoomControlButton;
