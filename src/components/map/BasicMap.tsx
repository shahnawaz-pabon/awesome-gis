import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
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

          {/* Streets View */}
          <LayersControl.BaseLayer name="StreetView">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // google street, subdomains={['mt0','mt1','mt2','mt3']}
              maxZoom={18}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
          {/* End of Streets View */}

          {/* Hybrid View */}
          <LayersControl.BaseLayer name="HybridView">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // google hybrid, subdomains={['mt0','mt1','mt2','mt3']}
              maxZoom={18}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
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
        </LayersControl>
      </MapContainer>
    </div>
  );
};
