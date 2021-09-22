import React, { Component, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import MyMap from './MyMap';


function LeafletgeoSearch() {
    const map = useMap(); //here use useMap hook
  
    useEffect(() => {
      const provider = new OpenStreetMapProvider({
          params: {
              countrycodes: 'us', //restrict search results to USA
          },
      });
  
      const searchControl = new GeoSearchControl({
        provider,
        showMarker: false,
        // marker: {
        //   icon
        // }
      });
  
      map.addControl(searchControl);
  
      return () => map.removeControl(searchControl)
    }, []);
  
    return null;
  }


  export default LeafletgeoSearch