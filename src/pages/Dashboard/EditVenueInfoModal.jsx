import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import CustomInput from "../../components/FormComponents/CustomInput";
import { PhotoIcon } from "@heroicons/react/20/solid";
import amenityImages from "../../utils/amenityImages";
import ToggleButton from "../../components/ToggleButton";
import { useEffect } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const EditVenueInfoModal = ({
  open,
  setOpen,
  enabled,
  setEnabled,
  singleVenueData,
}) => {
  const cancelButtonRef = useRef(null);
  const [venueData, setVenueData] = useState(null);
  const [formFields, setFormFields] = useState({
    title: "",
    price: "",
    squareMeter: "",
    beds: "",
    bathrooms: "",
    guests: "",
    media: "",
  });
  const [media, setMedia] = useState([]);
  const [mediaFieldCount, setMediaFieldCount] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState(
    singleVenueData?.amenities || []
  );
  const [deleteDisabled, setDeleteDisabled] = useState(true);

  useEffect(() => {
    setVenueData(singleVenueData);
    setFormFields({
      title: singleVenueData?.title || "",
      price: singleVenueData?.price || "",
      squareMeter: singleVenueData?.squareMeter || "",
      beds: singleVenueData?.beds || "",
      bathrooms: singleVenueData?.bathrooms || "",
      guests: singleVenueData?.guestQuantity || "",
    });
    const initialMedia = singleVenueData?.media || [];
    setMedia(initialMedia);
    setMediaFieldCount(initialMedia.length > 1 ? initialMedia.length : 2);
    setSelectedAmenities(singleVenueData?.amenities || []);
  }, [singleVenueData]);

  const handleInputChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleAmenityClick = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleMediaChange = (index, field, value) => {
    setMedia((prevMedia) => {
      if (prevMedia[index]) {
        return prevMedia.map((item, idx) =>
          idx === index ? { ...item, [field]: value } : item
        );
      } else {
        return [...prevMedia, { [field]: value }];
      }
    });
  };

  const handleNewMediaField = (index) => {
    if (index === mediaFieldCount && mediaFieldCount < 8) {
      setMediaFieldCount(mediaFieldCount + 1);
      setMedia((prevMedia) => [...prevMedia, { image: "", description: "" }]);
    }
  };
  console.log("venueData", venueData);
  console.log("formFields", formFields);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <Dialog.Title className="mb-2">Edit your venue</Dialog.Title>
                <Dialog.Description>
                  Change your venue's title, description, cover photo, photos,
                  price, beds, bathrooms, guests, squaremeter and amenities.
                </Dialog.Description>
                <div className="mb-6 mt-2 flex flex-col gap-2 text-sm font-semibold">
                  {!enabled && (
                    <p className="text-primaryRed">
                      Your venue is not active.
                      <br /> Please activate it to make it public.
                    </p>
                  )}
                  {enabled && (
                    <p className="text-emerald-600">Your venue is active.</p>
                  )}
                  <ToggleButton enabled={enabled} setEnabled={setEnabled} />
                </div>
                <div className=" flex flex-col gap-4 ">
                  <div className="flex justify-between gap-4">
                    <CustomInput
                      flex1="flex-1"
                      labelName="Title"
                      required=""
                      marginTop=""
                      name="title"
                      value={formFields.title}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      flex1="flex-1"
                      labelName="Price per night"
                      required=""
                      marginTop=""
                      name="price"
                      value={formFields.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex justify-between gap-4">
                    <CustomInput
                      flex1="flex-1"
                      labelName="Squaremeter"
                      required=""
                      marginTop=""
                      name="squaremeter"
                      value={formFields.squareMeter}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      flex1="flex-1"
                      labelName="Bathrooms"
                      required=""
                      marginTop=""
                      name="bathrooms"
                      value={formFields.bathrooms}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex justify-between gap-4">
                    <CustomInput
                      flex1="flex-1"
                      labelName="Beds"
                      required=""
                      marginTop=""
                      name="beds"
                      value={formFields.beds}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      flex1="flex-1"
                      labelName="Max guests"
                      required=""
                      marginTop=""
                      name="guests"
                      value={formFields.guests}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900 "
                    >
                      Description:
                    </label>
                    <textarea
                      name="description"
                      value={formFields.description}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 
                              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                              focus:ring-inset focus:ring-secondaryOrange sm:text-sm sm:leading-6"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <h2 className="mb-2">Media</h2>
                    <p>
                      Your cover photo will serve as the thumbnail and will be
                      the image most frequently displayed to potential
                      customers.
                    </p>
                  </div>
                  <div>
                    <CustomInput
                      marginTop=""
                      required=""
                      labelName="Cover Photo"
                      name="media"
                      value={media[0]?.image || ""}
                      onChange={(e) =>
                        handleMediaChange(0, "image", e.target.value)
                      }
                    />
                    <div className="relative mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-12">
                      <div className="absolute top-0 h-full w-full">
                        {/* <img className="h-full w-full" src="" alt="" /> */}
                      </div>
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-primaryRed"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        name="description"
                        value={media[0]?.description || ""}
                        onChange={(e) =>
                          handleMediaChange(0, "description", e.target.value)
                        }
                        className="mt-2 block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 
                              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                              focus:ring-inset focus:ring-secondaryOrange sm:text-sm sm:leading-6"
                        cols="30"
                        rows="2"
                        placeholder="Cover photo description"
                      ></textarea>
                    </div>
                  </div>
                  <p>
                    There is a limit of 8 images that can be attached to your
                    accommodation listing.
                  </p>
                  <div className="flex flex-col gap-8">
                    {Array(mediaFieldCount)
                      .fill()
                      .map((_, index) => (
                        <div key={index + 1} className="">
                          <CustomInput
                            marginTop=""
                            required=""
                            labelName={`Photo ${index + 1}`}
                            placeholder="Photo URL"
                            value={media[index + 1]?.image || ""}
                            onChange={(e) => {
                              handleMediaChange(
                                index + 1,
                                "image",
                                e.target.value
                              );
                              handleNewMediaField(index + 1);
                            }}
                          />
                          <CustomInput
                            required=""
                            colonSymbol=""
                            marginTop="mt-2"
                            placeholder="Photo description"
                            value={media[index + 1]?.description || ""}
                            onChange={(e) => {
                              handleMediaChange(
                                index + 1,
                                "description",
                                e.target.value
                              );
                              handleNewMediaField(index + 1);
                            }}
                          />
                          {(!media[index + 1]?.image ||
                            media[index + 1]?.image === "") &&
                            media[index + 1]?.description?.length > 0 && (
                              <p className="text-sm text-red-500">
                                Image is required when adding a description.
                              </p>
                            )}
                          {index === 7 && (
                            <p className="mt-1 text-sm font-semibold text-[#f3a702]">
                              You've reach the maximum amount of images. <br />8
                              images is the limit.
                            </p>
                          )}
                        </div>
                      ))}
                  </div>

                  <div>
                    <label>Amenities:</label>
                    <div className="grid grid-cols-4 gap-2">
                      {Object.entries(amenityImages).map(
                        ([amenity, imageSrc], index) => (
                          <div
                            className={`flex cursor-pointer flex-col items-center rounded-lg border py-4 transition
                            ${
                              selectedAmenities.includes(amenity)
                                ? " border-solid border-secondaryOrange ring-2 ring-secondaryOrange"
                                : "border-dashed border-gray-400 hover:border-secondaryOrange hover:ring-2 hover:ring-secondaryOrange/50"
                            }
                            `}
                            onClick={() => handleAmenityClick(amenity)}
                            key={index}
                          >
                            <div className="h-8 w-8">
                              <img
                                className={`h-full w-full ${
                                  selectedAmenities.includes(amenity) &&
                                  "bounce"
                                }`}
                                src={imageSrc}
                                alt={amenity}
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4  border-t border-slate-200 py-6">
                  <div className="flex items-center gap-4">
                    <p className="font-semibold">Delete venue</p>
                    <ExclamationTriangleIcon className="h-8 w-8 text-primaryRed" />
                  </div>
                  <p className="text-sm">
                    When deleting your venue, all associated data will be
                    permanently lost. This action cannot be undone.
                  </p>
                  <div className="mt-4 flex">
                    <CustomInput
                      required=""
                      colonSymbol=""
                      flex1="flex-1"
                      marginTop=""
                    />
                    <button
                      className={`ml-4 h-auto justify-center rounded-md 
                        bg-primaryRed px-3 text-sm font-semibold text-white
                         shadow-sm hover:bg-[#EF6623] 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF6623]`}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
                <div className="mb-4 h-[1px] w-full bg-slate-200"></div>
                <div className=" flex w-full justify-end">
                  <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                    Cancel
                  </button>
                  <button
                    className="ml-4 inline-flex justify-center rounded-md bg-secondaryOrange 
                        px-3 py-2 text-sm font-semibold text-white 
                         shadow-sm hover:bg-[#EF6623] 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF6623]"
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditVenueInfoModal;
