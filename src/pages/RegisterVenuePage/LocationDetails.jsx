import CustomInput from '../../components/FormComponents/CustomInput';

const LocationDetails = ({ addressComponents }) => {
  const getComponentValue = (...types) => {
    for (const type of types) {
      const component = addressComponents.find((component) =>
        component.types.includes(type)
      );
      if (component) {
        return component.long_name;
      }
    }
    return '';
  };

  const street = getComponentValue('route', 'street_address');
  const streetNumber = getComponentValue('street_number');
  const city = getComponentValue(
    'locality',
    'postal_town',
    'sublocality_level_1'
  );
  const state = getComponentValue(
    'administrative_area_level_2',
    'administrative_area_level_1'
  );
  const zipCode = getComponentValue('postal_code');
  const country = getComponentValue('country');

  return (
    <div className="w-full max-w-lg mb-6">
      <div className="flex flex-col gap-4">
        <CustomInput
          type="text"
          labelName="Street"
          value={`${street} ${streetNumber}`}
          className="input-field"
          readOnly
        />
        <CustomInput
          type="text"
          labelName="City"
          value={city}
          className="input-field"
          readOnly
        />
        <CustomInput
          type="text"
          labelName="State"
          value={state}
          className="input-field"
          readOnly
        />
        <CustomInput
          type="text"
          labelName="Zip Code"
          value={zipCode}
          className="input-field"
          readOnly
        />
        <CustomInput
          type="text"
          labelName="Country"
          value={country}
          className="input-field"
          readOnly
        />
      </div>
    </div>
  );
};

export default LocationDetails;
