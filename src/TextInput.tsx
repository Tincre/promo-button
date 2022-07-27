/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useState } from 'react';

import Socials from './Socials';
function validateUrl(value: string) {
  try {
    if (typeof value === 'string' && !value.length) return value;
    const currentUrl = new URL(value);
    const { protocol } = currentUrl;

    if (protocol !== 'http:' && protocol !== 'https:') {
      currentUrl.protocol = 'http:';
      return currentUrl.toString();
    }
    return value;
  } catch (e) {
    return `https://${value}`;
  }
}

/**
 * @description
 * The ad target link input component. Input is required by the user.
 *
 * > Refer to this input by its id `target`.
 *
 * @param placeholder - the placeholder text for the HTML input tag.
 */
export default function TextInput({ placeholder }: { placeholder?: string }) {
  let [targetLink, setTargetLink] = useState<string | null | undefined>(null);
  let [socialsData, setSocialsData] = useState<any>({
    socials: {
      Instagram: '',
      Spotify: '',
      Facebook: '',
      'Web Url': '',
      YouTube: '',
      Apple: '',
      Twitter: '',
    },
    targetLink: targetLink,
  });
  let [isChanging, setIsChanging] = useState<boolean | null | undefined>(null);
  return (
    <div className="mt-3">
      <label htmlFor="target" className="promo-button-target-link-label">
        Target link for your ads
      </label>
      <div className="promo-button-target-link-input-container">
        <input
          type="url"
          name="target"
          id="target"
          className="promo-button-target-link-input"
          placeholder={
            placeholder || 'https://www.youtube.com/watch?v=KfL1VCv2kCI'
          }
          formNoValidate
          onBlur={(event) => {
            event.preventDefault();
            event.target.value = validateUrl(event.target.value);
          }}
          onChange={(event) => {
            setIsChanging(true);
            setTargetLink(event.target.value);
            socialsData['targetLink'] = event.target.value;
            setSocialsData(socialsData);
            setIsChanging(false);
          }}
          required
        />
      </div>
      <div className="mt-2 -mb-1 text-center">
        {!isChanging ? (
          <Socials props={socialsData} />
        ) : (
          <Socials props={socialsData} />
        )}
      </div>
    </div>
  );
}
