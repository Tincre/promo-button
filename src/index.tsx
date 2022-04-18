import './index.css';
import React, { Suspense } from 'react';
import RealEasyLogo from './RealEasyLogo';
import RangeInput from './RangeInput';
import TextInput from './TextInput';
import NameInput from './NameInput';
import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from './icons';
import ThreeWords from './ThreeWords';
import { useScript } from './lib/useScript';

const Cloudinary = React.lazy(() => import('./Cloudinary'));
export function HowItWorks() {
  return (
    <div id="how-it-works-post-campaign-submission" className="">
      <p className="font-leading mt-10 w-full">
        <span className="font-bold text-xl">1. </span>
        <span className="font-medium text-sm">
          Your ads are optimizing. Check your email for the invoice.{' '}
          <span className="font-normal text-gray-800">
            Once paid, your campaign will be serving fans ads.
          </span>
        </span>
      </p>
      <p className="font-leading mt-5 w-full">
        <span className="font-bold text-xl">2. </span>
        <span className="font-medium text-sm">
          {`Monitor your ads right from your inbox. `}
          <span className="font-normal text-gray-800">{`We'll send you daily reports with just what's important.`}</span>
        </span>
      </p>
      <p className="font-leading mt-5 w-full">
        <span className="font-bold text-xl">3. </span>
        <span className="font-medium text-sm">
          {`Focus on what matters: your music, your fans, you. `}
          <span className="font-normal text-gray-800">{`You're now rocking with your ad campaign!`}</span>
        </span>
      </p>
      <p className="font-leading mt-10 w-full">
        <span className="font-bold text-lg">Need anything? </span>
        <span className="font-medium text-xs">
          Check out our{' '}
          <a
            href="https://docs.musicfox.io/b00st"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:underline hover:text-red-700 active:text-red-700"
          >
            FAQs and docs
          </a>{' '}
          or join our{' '}
          <a
            href="https://discord.gg/TTAHyZkUYQ"
            className="font-bold text-black hover:underline hover:text-red-700 active:text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Community
          </a>
          .
        </span>
      </p>

      <p className="text-xs mt-5 text-gray-600 w-full italic mx-auto text-center">
        Click the <span className="font-bold text-gray-800 uppercase">X</span>{' '}
        above or anywhere outside of this dialogue to close.
      </p>
    </div>
  );
}
export function TeamEmail({
  isSubmitted,
  isSubmitting,
}: {
  isSubmitted: any;
  isSubmitting: any;
}) {
  let buttonStyle = `inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 hover:text-black sm:text-sm`;
  return (
    <div>
      {' '}
      {!isSubmitted ? (
        <>
          <span className="block text-xs italic font-light text-center mb-1">
            Advanced users
          </span>
          <a
            target="_blank"
            className={
              !isSubmitting ? buttonStyle : buttonStyle + 'disabled bg-gray-800'
            }
            href={
              'mailto:team@b00st.com?&subject=B00ST%20ad%20campaign&body=Start%20a%20new%20campaign'
            }
            rel="noreferrer"
          >
            {'team@b00st.com'}
          </a>
        </>
      ) : null}
    </div>
  );
}
export function ImageUploadError() {
  return (
    <div>
      <p className="text-sm font-medium italic text-red-700 mb-2">
        Please upload an image or video in order to run your B00ST campaign!
      </p>
    </div>
  );
}
export function TargetLinkError() {
  return (
    <div>
      <p className="text-sm font-medium italic text-red-700 mb-2">
        It appears the submitted link is not a valid url. Please try again.
      </p>
    </div>
  );
}
export function CloseButtonXIcon({ onClose }: { onClose: any }) {
  return (
    <div className="block absolute top-0 right-0 pt-4 pr-4">
      <button
        type="button"
        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
        onClick={() => onClose(false)}
      >
        <span className="sr-only">Close</span>
        <XIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export function BButton({
  logoSrc,
  user,
  shape,
  open,
  words,
}: {
  logoSrc: string;
  user: any;
  shape: string;
  open: boolean;
  words: Array<string>;
}) {
  let [isOpen, setIsOpen] = useState(false);
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [isSubmitting, setIsSubmitting] = useState(false);
  let [fileImage, setFileImage] = useState(undefined);
  let [imageUploadError, setImageUploadError] = useState(false);
  let [targetLinkError, setTargetLinkError] = useState(false);
  let artistNameInputRef = useRef(null);
  useScript('https://widget.cloudinary.com/v2.0/global/all.js');

  let mainButtonStyle: any = null;
  if (typeof shape !== 'undefined') {
    if (
      shape !== 'square' &&
      shape !== 'circle' &&
      shape !== 'plain' &&
      shape !== 'hero'
    )
      return null;
    mainButtonStyle = shape;
  } else {
    mainButtonStyle = 'square';
  }
  let buttonTextArray;
  if (typeof words === 'undefined') {
    buttonTextArray = ['Real', 'Easy', 'Ads!'];
  } else {
    buttonTextArray = words;
  }
  const mainButtonClassName = () => {
    let staticStyle = 'rounded-md';
    if (mainButtonStyle === 'square') {
      staticStyle = 'rounded-md';
    } else if (mainButtonStyle === 'circle') {
      staticStyle = 'rounded-full';
    } else if (mainButtonStyle === 'plain') {
      staticStyle = 'rounded-md py-2 px-6 md:py-3 md:px-6';
    } else if (mainButtonStyle === 'hero') {
      return `group inline-block px-24 py-24 uppercase leading-none text-white font-thinner bg-black hover:bg-gray-100 rounded-md shadow`;
    }

    return `group inline-block min-w-24 min-h-24 px-3 py-2 max-w-48 max-h-48 md:py-3 md:px-3 md:mr-2 uppercase leading-none text-white font-thinner bg-black hover:bg-gray-100 ${staticStyle} shadow`;
  };

  const submitCampaign = async (event: any) => {
    try {
      event.preventDefault();
      if (!fileImage) throw Error('FILE upload is required');
      setIsSubmitting(true);
      let targetLink = event.target.target.value;
      if (targetLink.substring(0, 8) !== 'https://') {
        if (!targetLink.includes('http://')) {
          targetLink = 'https://' + targetLink;
        }
      }
      let urlTest = true;
      if (!urlTest) {
        throw Error('Submitted link is not a valid URL');
      }
      if (targetLinkError) setTargetLinkError(false);
      const data = {
        target: event.target.target.value,
        budget: event.target.budget.value,
        email: user.email,
        file: fileImage,
        name: event.target.name.value,
      };
      const response = await fetch('/api/submit-campaign', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (response?.status === 200) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFileImage(undefined);
      } else {
        setIsSubmitted(false);
      }
      setIsSubmitting(false);
      setImageUploadError(false);
      setTargetLinkError(false);
    } catch (error: any) {
      console.error(JSON.stringify(error.message));
      setIsSubmitting(false);
      if (error?.message && error.message.includes('FILE')) {
        setImageUploadError(true);
      } else {
        setTargetLinkError(true);
      }
    }
  };
  return (
    <div className="animate-ring rounded-md">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsSubmitted(false);
        }}
        className={mainButtonClassName()}
      >
        <span className="mx-auto uppercase italic text-md font-bold subpixel-antialiased my-auto">
          <ThreeWords
            {...{ words: buttonTextArray, isHero: mainButtonStyle === 'hero' }}
          />
          <div>
            <Transition.Root show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                initialFocus={artistNameInputRef}
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                open={isOpen}
                onClose={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="rounded-md fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <form
                      onSubmit={submitCampaign}
                      className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                    >
                      <div>
                        <div className="px-12">
                          <RealEasyLogo src={logoSrc} />
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                          <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-gray-900"
                          >
                            {!isSubmitted ? `Start a campaign` : `Success!`}{' '}
                            <CloseButtonXIcon onClose={setIsOpen} />
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm italic text-gray-500">
                              {!isSubmitted
                                ? `We need just a few items to start.`
                                : `Check your email for a link to fund your campaign.`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6">
                        {!isSubmitted ? (
                          <div>
                            <NameInput />
                            <TextInput />
                            <RangeInput />
                            <Suspense fallback={<div>Loading...</div>}>
                              <Cloudinary
                                imageData={fileImage}
                                setFileImage={setFileImage}
                              />
                            </Suspense>
                            <div className="mt-5 sm:mt-6">
                              {imageUploadError && !fileImage ? (
                                <ImageUploadError />
                              ) : null}
                              {targetLinkError ? <TargetLinkError /> : null}
                              <button
                                type="submit"
                                disabled={isSubmitting && fileImage}
                                className={`${
                                  !isSubmitting ? '' : 'disabled:bg-gray-800'
                                } inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 antialiased text-lg sm:text-md font-bold tracking-wide text-white hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 hover:text-black `}
                              >
                                {!isSubmitting ? (
                                  <svg
                                    className="hidden -ml-1 mr-3 h-5 w-5 text-white"
                                    viewBox="0 0 24 24"
                                  />
                                ) : (
                                  <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                )}
                                Submit
                              </button>
                            </div>
                          </div>
                        ) : (
                          <HowItWorks />
                        )}
                      </div>
                      <div className="mt-2 sm:mt-3">
                        <TeamEmail
                          isSubmitted={isSubmitted}
                          isSubmitting={isSubmitting}
                        />
                      </div>
                    </form>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </span>
      </button>
    </div>
  );
}
