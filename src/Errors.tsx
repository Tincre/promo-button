/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
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
