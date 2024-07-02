import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api'; 
const cursorMarker = require('../../assets/img/cursor.png');

/*Información de la API:
https://www.npmjs.com/package/@react-google-maps/api
API: AIzaSyCgMm4qwWOUGwtO-EiKHWVi4bmUNq6vNt0*/


function Map({ width, height }) {

  const containerStyle = {
    width: width,
    height: height,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCgMm4qwWOUGwtO-EiKHWVi4bmUNq6vNt0" 
  });

  const [map, setMap] = useState(null);
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    // Obtiene la ubicación actual del usuario y actualiza el estado
    const watchUserLocation = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserPosition({ lat: latitude, lng: longitude });
        if (map) {
          map.panTo({ lat: latitude, lng: longitude }); 
        }
      },
      error => {
        console.error('Error al obtener la localización:', error);
      }
    );

    // Limpia el watcher cuando el componente se desmonta
    return () => navigator.geolocation.clearWatch(watchUserLocation);
  }, [map]);

  const onLoad = map => {
    setMap(map);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="m-2 p-4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userPosition || { lat: 0, lng: 0 }}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {userPosition && <Marker position={userPosition} icon={cursorMarker} />}
      </GoogleMap>
    </div>
  ) : <></>;
}


export default Map;