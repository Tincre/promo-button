/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import './styles/default.css';
import React, { Suspense, Fragment, useState, useRef } from 'react';
import RangeInput from './RangeInput';
import TextInput from './TextInput';
import AdTitleInput from './AdTitleInput';
import { Dialog, Transition } from '@headlessui/react';
import DialogHeader from './DialogHeader';
import ThreeWords from './ThreeWords';
import { useScript } from './lib/useScript';
import { getToken } from './lib/getToken';
import HowItWorks from './HowItWorks';
import SubmitButton from './SubmitButton';
//import TeamEmail from './TeamEmail';
import { TargetLinkError, ImageUploadError } from './Errors';
const Cloudinary = React.lazy(() => import('./Cloudinary'));

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
  const mainButtonClassName =
    typeof shape !== 'string'
      ? 'promo-button-main group'
      : `promo-button-${shape} group`;
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
    <button
      onClick={() => {
        setIsOpen(true);
        setIsSubmitted(false);
      }}
      className={mainButtonClassName}
    >
      <div className="promo-button-text">
        <ThreeWords
          {...{
            words: buttonTextArray,
            isHero: mainButtonClassName === 'promo-button-hero group',
          }}
        />
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            initialFocus={adTitleInputRef}
            static
            className="promo-button-dialog-outer"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className="promo-button-dialog-inner">
              <Transition.Child
                as={Fragment}
                enter="promo-ease-out promo-duration-300"
                enterFrom="promo-opacity-0"
                enterTo="promo-opacity-100"
                leave="promo-ease-in promo-duration-200"
                leaveFrom="promo-opacity-100"
                leaveTo="promo-opacity-0"
              >
                <Dialog.Overlay className="promo-fixed promo-inset-0 promo-bg-gray-500 promo-bg-opacity-75 promo-transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="promo-hidden sm:promo-inline-block sm:promo-align-middle sm:promo-h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="promo-ease-out promo-duration-300"
                enterFrom="promo-opacity-0 promo-translate-y-4 sm:promo-translate-y-0 sm:promo-scale-95"
                enterTo="promo-opacity-100 promo-translate-y-0 sm:promo-scale-100"
                leave="promo-ease-in promo-duration-200"
                leaveFrom="promo-opacity-100 promo-translate-y-0 sm:promo-scale-100"
                leaveTo="promo-opacity-0 promo-translate-y-4 sm:promo-translate-y-0 sm:promo-scale-95"
              >
                <form
                  onSubmit={submitCampaign}
                  className="promo-button-form-container"
                >
                  <DialogHeader
                    isSubmitted={isSubmitted}
                    setIsOpen={setIsOpen}
                    logoSrc={logoSrc}
                  />

                  <div className="promo-mt-5 sm:promo-mt-6">
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
                        <div className="promo-mt-5 sm:promo-mt-6">
                          {imageUploadError && !fileImage ? (
                            <ImageUploadError />
                          ) : null}
                          {targetLinkError ? <TargetLinkError /> : null}
                          <SubmitButton
                            isSubmitting={isSubmitting}
                            fileImage={fileImage}
                          />
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
    </button>
  );
}

export { getToken };
