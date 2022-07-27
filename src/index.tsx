/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import './default.css';
import React, { Suspense } from 'react';
import RealEasyLogo from './RealEasyLogo';
import RangeInput from './RangeInput';
import TextInput from './TextInput';
import AdTitleInput from './AdTitleInput';
import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from './icons';
import ThreeWords from './ThreeWords';
import { useScript } from './lib/useScript';
import { getToken } from './lib/getToken';

const Cloudinary = React.lazy(() => import('./Cloudinary'));

export function HowItWorks({
  communityLink,
  docsLink,
}: {
  communityLink?: string;
  docsLink?: string;
}) {
  return (
    <div id="how-it-works-post-campaign-submission" className="">
      <p className="font-leading mt-10 w-full">
        <span className="font-bold text-xl">1. </span>
        <span className="font-medium text-sm">
          Your ads are optimizing. Check your email for the invoice link.{' '}
          <span className="font-normal text-gray-800">
            Once paid, your campaign will be serving ads.
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
            href={docsLink || 'https://community.tincre.dev'}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:underline hover:text-red-700 active:text-red-700"
          >
            FAQs and docs
          </a>{' '}
          or join our{' '}
          <a
            href={communityLink || 'https://community.tincre.dev'}
            className="font-bold text-black hover:underline hover:text-red-700 active:text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
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
      <p className="promo-button-image-upload-error">
        Please upload an image or video in order to run your campaign.
      </p>
    </div>
  );
}
export function TargetLinkError() {
  return (
    <div>
      <p className="promo-button-target-link-error">
        It appears the submitted link is not a valid url. Please try again.
      </p>
    </div>
  );
}
export function CloseButtonXIcon({ onClose }: { onClose: any }) {
  return (
    <div className="promo-button-close-icon-outer">
      <button
        type="button"
        className="promo-button-close-icon-inner"
        onClick={() => onClose(false)}
      >
        <span className="sr-only">Close</span>
        <XIcon className="promo-button-close-icon-size" aria-hidden="true" />
      </button>
    </div>
  );
}

export function PromoButton({
  logoSrc,
  shape,
  words,
  email,
  backend,
}: {
  logoSrc: string;
  shape: string;
  words: Array<string>;
  email: string;
  backend: string;
}) {
  let [isOpen, setIsOpen] = useState(false);
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [isSubmitting, setIsSubmitting] = useState(false);
  let [fileImage, setFileImage] = useState(undefined);
  let [imageUploadError, setImageUploadError] = useState(false);
  let [targetLinkError, setTargetLinkError] = useState(false);
  let adTitleInputRef = useRef(null);
  useScript('https://widget.cloudinary.com/v2.0/global/all.js');

  let buttonTextArray;
  if (typeof words === 'undefined') {
    buttonTextArray = ['Real', 'Easy', 'Ads!'];
  } else {
    buttonTextArray = words;
  }
  const mainButtonClassName = () => {
    if (typeof shape !== 'string') {
      return 'group promo-button-main';
    }
    return `group promo-button-${shape}`;
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
        target_link: event.target.target.value,
        budget: event.target.budget.value,
        email: email,
        creative_uri: [fileImage],
        asset_title: event.target.name.value,
      };
      const response = await fetch(backend, {
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
    <div className="rounded-md">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsSubmitted(false);
        }}
        className={mainButtonClassName()}
      >
        <span className="promo-button-text">
          <ThreeWords
            {...{
              words: buttonTextArray,
              isHero: mainButtonClassName() === 'group promo-button-hero',
            }}
          />
          <div>
            <Transition.Root show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                initialFocus={adTitleInputRef}
                static
                className="promo-button-dialog-outer"
                open={isOpen}
                onClose={() => setIsOpen(!isOpen)}
              >
                <div className="promo-button-dialog-inner">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                      className="promo-button-form-container"
                    >
                      <div>
                        <RealEasyLogo src={logoSrc} />
                        <div className="mt-3 text-center sm:mt-5">
                          <Dialog.Title
                            as="h3"
                            className="promo-button-dialog-title-text"
                          >
                            {!isSubmitted ? `Start a campaign` : `Success!`}{' '}
                            <CloseButtonXIcon onClose={setIsOpen} />
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="promo-button-dialog-subtitle-text">
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
                            <AdTitleInput />
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
                                  !isSubmitting ? '' : 'promo-button-dialog-submission-button-disabled'
                                } promo-button-dialog-submission-button`}
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

export { getToken };
