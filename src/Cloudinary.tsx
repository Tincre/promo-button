/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { detectMediaType, getOptions } from './lib/utils';
import { CloudinaryOptions } from './lib/defaultOptions';

function getWidget(
  setFileImage: any,
  cloudinaryOptions?: undefined | CloudinaryOptions
) {
  if (typeof window.cloudinary === 'undefined') return null;
  let options = getOptions(cloudinaryOptions);
  console.debug(`getCloudinary options set: ${JSON.stringify(options)}`);
  let widget = window.cloudinary.createUploadWidget(
    options.cloudinary,
    (error: any, result: any) => {
      if (!error && result && result.event === 'success') {
        setFileImage({ ...result.info });
      }
      if (error) {
        console.error(error.message);
      }
    }
  );
  return widget;
}
function showWidget(widget: any) {
  if (typeof window.cloudinary === 'undefined') return null;
  widget.open();
}

export default function Cloudinary({
  imageData,
  setFileImage,
  options,
}: {
  imageData: any;
  setFileImage: any;
  options?: undefined | CloudinaryOptions;
}) {
  // TODO add func input for alt text (should take copy generated for ad)
  const mediaUrlType = detectMediaType(imageData?.secure_url);
  // TODO render <video> or <img> as appropriate
  let widget = getWidget(setFileImage, options);
  return (
    <>
      <div className="promo-mt-3" id="cloudinary-upload-widget">
        <label
          htmlFor="cloudinary-upload-widget"
          className="promo-button-upload-button-label"
        >
          Upload an image or video
        </label>
        {!imageData ? (
          <button
            type="button"
            id="cloudinary-upload-widget"
            className="promo-button-upload-button"
            onClick={() => showWidget(widget)}
          >
            Ad creative upload tool
          </button>
        ) : (
          <div className="promo-text-center promo-px-4 promo-py-4">
            <button type="button" onClick={() => showWidget(widget)}>
              {!!mediaUrlType && mediaUrlType === 'image' ? (
                <img
                  className="promo-rounded-md promo-max-h-48"
                  src={imageData.secure_url}
                  alt="uploaded promo ad campaign static media"
                />
              ) : !!mediaUrlType && mediaUrlType === 'video' ? (
                <video
                  className="promo-rounded-md promo-max-h-48"
                  controls
                  src={imageData.secure_url}
                ></video>
              ) : null}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
