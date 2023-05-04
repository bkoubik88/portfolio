"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { useRef, useEffect } from "react";

export default function Karte() {
  const mapRef = useRef(null);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmtvdWJpazg4IiwiYSI6ImNsNmczcTZkYjA4eGUzaW52b3owZWM1bzEifQ.71zIyJgMvXMOR2P1ArtB4w";

  useEffect(() => {
    const createMap = () => {
      const map = new mapboxgl.Map({
        container: mapRef.current!!,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [9.138861654515926, 48.63955990602048],
        zoom: 12,
        attributionControl: false,
        minZoom: 12,
        maxZoom: 12,
      });

      map.on("load", () => {
        map.resize();

        // Create a default Marker and add it to the map.
        new mapboxgl.Marker()
          .setLngLat([9.127874877524846, 48.63936384503334])
          .addTo(map);
      });
    };

    mapRef.current && createMap();
  }, [mapRef.current]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px] "
    ></div>
  );
}
