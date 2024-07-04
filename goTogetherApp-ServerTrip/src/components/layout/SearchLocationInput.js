import React, { useEffect, useRef, useState } from "react";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../../constants/constants";
import { MdPlace } from "react-icons/md";

const loadScript = (url, callback, onError) => {
  const script = document.createElement("script");
  script.type = "text/javascript";

  script.onload = callback;
  script.onerror = onError;

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const SearchLocationInput = ({ origin, destination }) => {
    const [query1, setQuery1] = useState(origin ? origin.address : "");
    const [query2, setQuery2] = useState(destination ? destination.address : "");
  const [error, setError] = useState(null);

  const autoCompleteRef1 = useRef(null);
  const autoCompleteRef2 = useRef(null);

  const handleScriptLoad = () => {
    if (!window.google) {
      setError("Google Maps API failed to load.");
      return;
    }

    const autoComplete1 = new window.google.maps.places.Autocomplete(
      autoCompleteRef1.current,
      {
        componentRestrictions: { country: "ec" },
      }
    );

    autoComplete1.addListener("place_changed", () => {
      handlePlaceSelect(autoComplete1, 1);
    });

    const autoComplete2 = new window.google.maps.places.Autocomplete(
      autoCompleteRef2.current,
      {
        componentRestrictions: { country: "ec" },
      }
    );

    autoComplete2.addListener("place_changed", () => {
      handlePlaceSelect(autoComplete2, 2);
    });
  };

  const handlePlaceSelect = async (autoComplete, inputNumber) => {
    const addressObject = await autoComplete.getPlace();
    const query = addressObject?.formatted_address;
    if (!addressObject || !query) {
      setError("Failed to get place details.");
      return;
    }

    if (inputNumber === 1) {
      setQuery1(query);
    } else {
      setQuery2(query);
    }

    const latLng = {
      lat: addressObject.geometry.location.lat(),
      lng: addressObject.geometry.location.lng(),
    };
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_KEY}&libraries=places`,
      handleScriptLoad,
      () => setError("Error loading Google Maps script")
    );
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex w-full">
        <div className='w-1/2'>
            <div class="relative"> 
                <div class="absolute inset-y-6 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                    <MdPlace />
                </div>
            </div>
            <input
                ref={autoCompleteRef1}
                className="text-gray-900 border border-gray-300 text-sm rounded-l-full block w-full ps-10 p-3 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none h-12" 
                onChange={(event) => setQuery1(event.target.value)}
                placeholder="Salida"
                value={query1}
            />
        </div>
        <div className='w-1/2'>
            <div class="relative"> 
                <div class="absolute inset-y-6 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                    <MdPlace />
                </div>
            </div>
            <input
              ref={autoCompleteRef2}
              className="text-gray-900 border border-gray-300 text-sm  block w-full ps-10 p-3 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none h-12"
              onChange={(event) => setQuery2(event.target.value)}
              placeholder="Destino"
              value={query2}
            />
        </div>
    </div>
  );
};

export default SearchLocationInput;
