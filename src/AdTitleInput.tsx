/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * @description The ad title input component. Refer to this input via the id `name`, if needed.
 * This input is required.
 *
 * @param placeholder - the placeholder text for the HTML input tag.
 */
export default function AdTitleInput({
  placeholder,
}: {
  placeholder?: string;
}) {
  return (
    <div className="promo-mt-0">
      <label htmlFor="adTitle" className="promo-button-ad-title-input-label">
        Ad title{' '}
        <span className="promo-button-ad-title-input-label-inner">{`as you'd like it to display on your ads`}</span>
      </label>
      <div className="promo-button-ad-title-input-container">
        <input
          type="text"
          name="adTitle"
          id="adTitle"
          className="promo-button-ad-title-input"
          placeholder={placeholder || `The Kool-Aid Man`}
          required
        />
      </div>
    </div>
  );
}
