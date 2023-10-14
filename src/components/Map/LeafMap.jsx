import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "../Shared/Container";
import { useRef, useState } from "react";
import { osm } from "./osm-providers";
const LeafMap = () => {
  const [center, setCenter] = useState([23.466003718915218, 91.09700684176624]);
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  return (
    <div className="sticky my-20">
      <Container>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />
        </MapContainer>
      </Container>
    </div>
  );
};

export default LeafMap;
