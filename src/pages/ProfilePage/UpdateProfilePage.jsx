import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CustomInput from "../../components/FormComponents/CustomInput";
import editProfileApi from "../../api/editProfileApi";
import { useState, useEffect } from "react";
import { setUserAvatar } from "../../store/modules/userMenuInfoSlice";
import { useDispatch } from "react-redux";
import {
  closeNotification,
  setNotification,
} from "../../store/modules/notificationSlice";
import { setItem, getItem } from "../../utils/storage";
import ToggleButton from "../../components/ToggleButton";
import editVenueManager from "../../api/editVenueManager";
import { setLoadingState } from "../../store/modules/loaderSlice";

function UpdateProfilePage({ open, setOpen, profile }) {
  const [info, setInfo] = useState({
    avatar: "",
  });
  const user = getItem("user");
  const [venueManager, setVenueManager] = useState(user?.venueManager || false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNotification({ show: false }));
  }, []);

  useEffect(() => {
    setInfo({
      avatar: profile?.avatar || "",
    });
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoadingState(true));
    try {
      const mediaBody = {
        avatar: info.avatar,
      };

      const response = await editProfileApi(mediaBody, profile.name);
      console.log("info: ", info);
      console.log("response: ", response);

      if (response) {
        console.log("Profile updated successfully");
        dispatch(setUserAvatar(info.avatar));
        setItem("user", {
          ...user,
          avatar: response.avatar,
        });
        setOpen(false);
        dispatch(
          setNotification({
            message: "Profile updated successfully!",
            details: "Your changes have been saved.",
            isSuccessful: true,
            show: true,
          })
        );
        dispatch(setLoadingState(false));
      }
      if (user.venueManager !== venueManager) {
        const venueBody = {
          venueManager: venueManager,
        };
        const venueResponse = await editVenueManager(venueBody, profile.name);

        console.log("venueResponse: ", venueResponse);
        if (venueResponse) {
          setItem("user", {
            ...user,
            venueManager: venueManager,
          });
        }
        dispatch(setLoadingState(false));
      } else {
        console.log("Profile update failed");
        setOpen(false);
        dispatch(
          setNotification({
            message: "Profile update failed!",
            details: `${
              response.data.errors[0].message
                ? response.data.errors[0].message
                : "Please try again later."
            }`,
            isSuccessful: false,
            show: true,
          })
        );
      }
    } catch (error) {
      console.log("error: ", error);
      setOpen(false);
      dispatch(setLoadingState(false));
      dispatch(
        setNotification({
          message: `${
            error.message ? error.message : "Profile update failed!"
          }`,
          details: `${
            error.response.data.errors[0].message
              ? error.response.data.errors[0].message
              : "Please try again later."
          }`,
          isSuccessful: false,
          show: true,
        })
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className=" relative z-20"
          onClose={() => setOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 transition-opacity" />
          <div className="fixed inset-0  ">
            <div className="fixed inset-0 overflow-hidden ">
              <div className="absolute inset-0 overflow-hidden ">
                <div className="pointer-events-none fixed inset-y-0 left-0 right-0 max-w-full ">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto mx-auto  h-full w-screen max-w-[1440px] md:w-11/12 md:px-0">
                      <div className=" space-y-10 divide-y divide-gray-900/10 ">
                        <div className="grid h-screen grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                          <div className="max-h-full px-4 md:mt-4 md:px-0">
                            <h3 className="text-base font-semibold leading-7 text-white md:text-2xl ">
                              Profile
                            </h3>
                            <p className="mt-1  text-sm leading-6 text-white">
                              This information will be displayed publicly so be
                              careful what you share.
                            </p>
                          </div>
                          <form className="flex h-[calc(100vh-112px)] flex-col  justify-between bg-background shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 md:h-screen">
                            <div className="flex min-h-0 flex-col  px-4 py-6 sm:p-8">
                              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 overflow-y-auto sm:grid-cols-6">
                                <div className="col-span-full">
                                  <label
                                    htmlFor="photo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Photo
                                  </label>
                                  <div className="mt-2 flex items-center gap-x-3">
                                    {!profile?.avatar && (
                                      <UserCircleIcon
                                        className="h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                    )}
                                    {profile?.avatar && (
                                      <img
                                        src={profile?.avatar}
                                        className="h-12  w-12 rounded object-cover text-gray-300"
                                        aria-hidden="true"
                                      />
                                    )}
                                    <CustomInput
                                      flex1="flex-1"
                                      name="avatar"
                                      value={info.avatar || ""}
                                      onChange={handleChange}
                                      required=""
                                      colonSymbol=""
                                      marginTop="mt-0"
                                      placeholder="Paste a URL to an image to set it as your profile photo."
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full ml-2">
                                  <p className="w-full">
                                    {venueManager
                                      ? "You are a Venue Manager"
                                      : "You are not a Venue Manager"}
                                  </p>
                                  <ToggleButton
                                    enabled={venueManager}
                                    setEnabled={setVenueManager}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-shrink-0 items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                              <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="text-sm font-semibold leading-6 text-gray-900"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                onClick={handleSubmit}
                                className="rounded-md bg-secondaryOrange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#EF6623] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondaryOrange"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default UpdateProfilePage;
