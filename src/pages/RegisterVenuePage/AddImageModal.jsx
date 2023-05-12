import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import CustomInput from '../../components/FormComponents/CustomInput';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStageData } from '../../store/modules/displayedVenueStageSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const AddImageModal = ({
  open,
  setOpen,
  successMessage,
  clickedButton,
  imageRemovedMessage,
}) => {
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();
  const stageData = useSelector(
    (state) => state.displayedVenueStage.stageData.stage6
  );

  const [isVisible, setIsVisible] = useState(false);
  const [isSameValue, setIsSameValue] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] =
    useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (
      (showSuccessMessage &&
        stageData &&
        stageData[clickedButton]) ||
      (!imageUrl && !stageData[clickedButton])
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [stageData, clickedButton, showSuccessMessage]);

  console.log('imageUrl: ', imageUrl);
  console.log(
    'stageData[clickedButton]: ',
    stageData[clickedButton]
  );

  useEffect(() => {
    if (
      (stageData &&
        stageData[clickedButton] === imageUrl) ||
      (stageData[clickedButton] === null && imageUrl === '')
    ) {
      setIsSameValue(true);
    } else {
      setIsSameValue(false);
    }
  }, [stageData, clickedButton, imageUrl]);

  const saveImageToStore = () => {
    dispatch(
      updateStageData({
        stage: 6,
        data: {
          ...stageData,
          [clickedButton]: imageUrl || null,
        },
      })
    );
    setShowSuccessMessage(true);
  };

  useEffect(() => {
    if (open && stageData && stageData[clickedButton]) {
      setImageUrl(stageData[clickedButton]);
    } else if (open) {
      setImageUrl(undefined);
    }
  }, [open, stageData, clickedButton]);

  useEffect(() => {
    if (
      imageUrl === stageData[clickedButton] &&
      successMessage
    ) {
      setMessage('Hooray! 😄 Image upload complete!');
    } else if (!imageUrl && !stageData[clickedButton]) {
      setMessage('Image removed 🙂');
    } else {
      setShowSuccessMessage(false);
    }
  }, [
    imageUrl,
    isSameValue,
    successMessage,
    stageData,
    clickedButton,
  ]);

  return (
    <>
      {open && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-10'
            onClose={() => {
              setOpen(false);
              setShowSuccessMessage(false);
            }}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <div className='fixed inset-0 z-10 overflow-y-auto'>
              <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                  enterTo='opacity-100 translate-y-0 sm:scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                  leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                >
                  <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                    <div>
                      <AnimatePresence>
                        {showSuccessMessage && (
                          <motion.div
                            className='relative'
                            initial={{ height: 0 }}
                            animate={{ height: '88px' }}
                            exit={{ height: 0 }}
                            transition={{
                              delay: isVisible ? 0.35 : 0,
                              duration: 0.35,
                            }}
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{
                                delay: isVisible ? 0 : 0.35,
                                duration: 0.35,
                              }}
                            >
                              <FaTimes
                                onClick={() => {
                                  setOpen(false);
                                  setShowSuccessMessage(
                                    false
                                  );
                                }}
                                className='absolute right-0 w-6 h-6 cursor-pointer text-textBlack hover:text-gray-700 transition-colors'
                              />
                              <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                                <CheckIcon
                                  className='h-6 w-6 text-green-600'
                                  aria-hidden='true'
                                />
                              </div>
                              <Dialog.Title
                                as='h3'
                                className='text-base mt-3 text-center sm:mt-5 font-semibold leading-6 text-gray-900'
                              >
                                {message}
                              </Dialog.Title>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {stageData[clickedButton] && (
                        <div className=' aspect-video flex justify-center w-full mt-4'>
                          <img
                            className='h-full w-full object-cover '
                            src={
                              stageData[clickedButton] &&
                              stageData[clickedButton]
                            }
                            alt='If your image URL is valid, the image is shown here'
                          />
                        </div>
                      )}
                      <div className='mt-3 text-center sm:mt-5'>
                        <CustomInput
                          onChange={(e) =>
                            setImageUrl(
                              e.target.value.trim()
                            )
                          }
                          required=''
                          labelName=''
                          colonSymbol=''
                          value={imageUrl}
                        />
                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>
                            Boost your listing with vibrant
                            images. Show your venue's unique
                            charm to attract more guests and
                            increase bookings.
                          </p>
                        </div>
                        <textarea
                          placeholder='What does your photo show?'
                          className='mt-2 border w-full rounded-md py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryOrange sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='mt-5 sm:mt-6 flex justify-between gap-6'>
                      <button
                        type='button'
                        className='inline-flex w-full justify-center rounded-md bg-[#0091AE] px-3 py-2 text-sm  text-white font-semibold shadow-sm hover:bg-[#34A9C0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0091AE] transition-all duration-300'
                        onClick={() => {
                          setOpen(false);
                          setShowSuccessMessage(false);
                        }}
                      >
                        Go back
                      </button>
                      <button
                        onClick={() => saveImageToStore()}
                        disabled={
                          imageUrl === undefined ||
                          isSameValue
                        }
                        className={`inline-flex w-full text-textBlack justify-center rounded-md px-3 py-2 text-sm  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#88D8B0] font-bold transition-all duration-300 bg-[#88D8B0] ${
                          imageUrl !== undefined &&
                          !isSameValue
                            ? ' hover:bg-[#9bf6c9]'
                            : 'opacity-30'
                        }`}
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
      )}
    </>
  );
};

export default AddImageModal;
