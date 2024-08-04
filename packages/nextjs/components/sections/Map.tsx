import React, { useRef, useState } from "react";
import GoogleMap from "google-maps-react-markers";
import { MapPinIcon } from "@heroicons/react/24/outline";

const coordinates = [
  { lat: -34.555153742929896, lng: -58.445149069314304, name: "Cuervo" },
  { lat: -34.55696436848291, lng: -58.45178353573575, name: "Gota Cafe" },
];

export const Map = () => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  /**
   * @description This function is called when the map is ready
   * @param map - reference to the map instance
   */
  const onGoogleApiLoaded = ({ map }: { map: any }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  if (!mapReady) console.log("Map not ready");
  return (
    <div className="flex-grow bg-base-300 w-full px-8 py-6">
      <div className="flex flex-co justify-center items-center gap-12 flex-col sm:flex-row">
        <h1 className="text-center">
          <span className="block text-4xl font-bold">Look For Reusable Cups:</span>
        </h1>
        <GoogleMap
          apiKey=""
          defaultCenter={{ lat: -34.555153742929896, lng: -58.445149069314304 }}
          defaultZoom={15}
          mapMinHeight="40vh"
          onGoogleApiLoaded={onGoogleApiLoaded}
          onChange={map => console.log("Map moved", map)}
        >
          {coordinates.map(({}, index) => (
            <MapPinIcon key={index} className="text-primary-content" style={{ color: "black" }} />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};
