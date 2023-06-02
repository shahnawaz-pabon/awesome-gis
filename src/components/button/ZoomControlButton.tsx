import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";

const ZoomControlButton = ({ position }: any) => {
  const map = useMap();
  const { zoomIn, zoomOut } = useSelector((state: any) => state.map);

  useEffect(() => {
    const zoomControl = L.control.zoom({
      position,
    });

    map.addControl(zoomControl);

    return () => {
      map.removeControl(zoomControl);
    };
  }, [map, position]);

  useEffect(() => {
    map.zoomIn();
  }, [map, zoomIn]);

  useEffect(() => {
    map.zoomOut();
  }, [map, zoomOut]);

  return null;
};

export default ZoomControlButton;
