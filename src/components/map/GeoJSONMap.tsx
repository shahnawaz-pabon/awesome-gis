import { GeoJSON } from "react-leaflet";
import { geoJSONStyle } from "../../constants/geoJSONStyle";

const GeoJSONMap = ({ data }: any) => {
  return <GeoJSON data={data} style={geoJSONStyle} />;
};

export default GeoJSONMap;
