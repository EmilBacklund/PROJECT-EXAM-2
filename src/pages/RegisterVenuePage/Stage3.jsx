import StageTemplate from './StageTemplate';
import { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import Suggestions from './Suggestions';
import LocationDetails from './LocationDetails';

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API;
const libraries = ['places'];

function Stage3() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const initialCenter = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [center, setCenter] = useState(initialCenter);
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [addressComponents, setAddressComponents] = useState(null);

  return (
    <div>
      <StageTemplate stageNumber={3} stageTitle={'Location'} />
      {addressComponents && (
        <LocationDetails addressComponents={addressComponents} />
      )}
      <div className="w-full relative h-[400px]">
        <GoogleMap
          zoom={zoom}
          center={center}
          options={{ disableDefaultUI: true }}
          mapContainerClassName="flex flex-col gap-4 w-full h-full rounded-3xl"
        >
          {selected && <Marker position={selected} />}
        </GoogleMap>
        <PlacesAutoComplete
          setZoom={setZoom}
          setCenter={setCenter}
          setSelected={setSelected}
          setAddressComponents={setAddressComponents}
        />
      </div>
    </div>
  );
}

const PlacesAutoComplete = ({
  setSelected,
  setCenter,
  setZoom,
  setAddressComponents,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  console.log(data);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    setCenter({ lat, lng });
    console.log(results);

    const locationType = results[0].types[0];

    switch (locationType) {
      case 'street_address':
        setZoom(17);
        break;
      case 'route':
        setZoom(15);
        break;
      case 'locality':
        setZoom(12);
        break;
      case 'sublocality_level_1':
        setZoom(11);
        break;
      case 'administrative_area_level_2':
        setZoom(10);
        break;
      case 'administrative_area_level_1':
        setZoom(8);
        break;
      case 'country':
        setZoom(5);
        break;
      default:
        setZoom(1);
    }

    setAddressComponents(results[0].address_components);
  };

  return (
    <div className="absolute top-0 w-full max-w-lg left-1/2 -translate-x-1/2">
      <Suggestions
        places={data}
        ready={ready}
        value={value}
        setValue={setValue}
        status={status}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default Stage3;
