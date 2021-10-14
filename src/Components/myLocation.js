import React, { Component, useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import icon from './constants';


function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return position === null ? null : (
    <Marker position={Position} icon={icon}>
      <Popup>My Location</Popup>
    </Marker>
  );
}


export default LocationMarker;