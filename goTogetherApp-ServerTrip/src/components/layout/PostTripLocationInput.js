import React, { useEffect, useRef, useState } from "react";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../../constants/constants";

const loadScript = (url, callback, onError) => {
  const script = document.createElement("script");
  script.type = "text/javascript";

  script.onload = callback;
  script.onerror = onError;

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const PostTripLocationInput = ({ setSelectedLocation, onPlaceSelected }) => {
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [markers, setMarkers] = useState({});
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

    setMarkers((prevMarkers) => ({
      ...prevMarkers,
      [inputNumber]: latLng,
    }));

    setSelectedLocation(latLng, inputNumber);

    if (onPlaceSelected) {
      onPlaceSelected(query, latLng, inputNumber);
    }
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
    <div className="sm:col-span-4 mb-3">
      <label className="block text-l font-bold leading-6 text-gray-900">
        ¿Desde dónde sales?
      </label>
      <div className="mt-2">
        <div className="flex ">
          <input
            ref={autoCompleteRef1}
            className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            onChange={(event) => setQuery1(event.target.value)}
            placeholder="Escribe la dirección completa"
            value={query1}
          />
        </div>
      </div>
      <div className="sm:col-span-4 mb-3 mt-2">
        <label className="block text-l font-bold leading-6 text-gray-900">
          ¿A dónde vas?
        </label>
        <div className="mt-2">
          <div className="flex ">
            <input
              ref={autoCompleteRef2}
              className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              onChange={(event) => setQuery2(event.target.value)}
              placeholder="Escribe la dirección completa"
              value={query2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTripLocationInput;
