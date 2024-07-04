import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const Route = ({}) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [duration, setDuration] = useState('');
  const [routes, setRoutes] = useState([]);
   const origin = { lat: 37.7749, lng: -122.4194 }; // San Francisco
   const destination = { lat: 34.0522, lng: -118.2437 }; //Los Ángeles

  useEffect(() => {
    if (origin && destination) {
      fetchDirections();
    }
  }, [origin, destination]);


  const fetchDirections = () => {

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true, // Para obtener rutas alternativas
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);

          // Obtener la duración del viaje
          const duration = result.routes[0].legs[0].duration.text;
          console.log(duration);
          setDuration(duration);

          // Obtener las rutas alternativas
          const routes = result.routes.map(route => {
            return {
              summary: route.summary,
              legs: route.legs[0].steps.map(step => step.instructions),
              duration: route.legs[0].duration.text,
              distance: route.legs[0].distance.text,
            };
          });
          setRoutes(routes);

        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCgMm4qwWOUGwtO-EiKHWVi4bmUNq6vNt0">
      <div>
        {/* <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          zoom={7}
          center={origin}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap> */}
        
        {duration && <h2>Duración Aproximada: {duration}</h2>}
{/* 
        {routes.length > 0 && (
          <div>
            <h3>Rutas Alternativas:</h3>
            {routes.map((route, index) => (
              <div key={index}>
                <h4>Ruta {index + 1}: {route.summary}</h4>
                <p>Duración: {route.duration}</p>
                <p>Distancia: {route.distance}</p>
                <ul>
                  {route.legs.map((step, stepIndex) => (
                    <li key={stepIndex} dangerouslySetInnerHTML={{ __html: step }}></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </LoadScript>
  );
};

export default Route;
