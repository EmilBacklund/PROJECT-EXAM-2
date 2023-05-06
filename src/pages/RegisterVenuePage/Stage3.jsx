import { useEffect, useRef } from 'react';
import StageTemplate from './StageTemplate';

const Stage3 = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let map;

    async function initMap() {
      const position = { lat: 60.128, lng: 18.643 };
      const { Map, places } = await google.maps.importLibrary('maps', 'places');

      map = new Map(mapRef.current, {
        zoom: 3,
        center: position,
        mapId: 'DEMO_MAP_ID',
        disableDefaultUI: true,
      });

      const autocomplete = new places.Autocomplete(inputRef.current);
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
      });
    }
    initMap();
  }, []);

  return (
    <div>
      <StageTemplate stageNumber={3} stageTitle={'Location'} />
      <div className="w-full relative">
        <div
          ref={mapRef}
          className="flex flex-col gap-4 w-full h-[400px] rounded-3xl "
        ></div>
        <input
          ref={inputRef}
          id="locationInput"
          type="text"
          placeholder="Enter a location"
          className="w-11/12 p-4 absolute left-1/2 -translate-x-1/2 right-0 top-4 h-12 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Stage3;
