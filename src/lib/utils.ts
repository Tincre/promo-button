/* eslint-disable no-unused-vars */

/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IMAGE_EXTENSIONS, VIDEO_EXTENSIONS } from './constants';
import defaultOptions from './defaultOptions';
/**
 * A fetcher for useSwr
 *
 * @param uri string web endpoint
 * @param options object `fetch` options. See fetch documentation.
 * @returns JSON response
 */
const fetcher = async (uri: string, options: any) => {
  let fetchOptions = options;
  if (typeof options !== 'object') fetchOptions = {};
  const response = await fetch(uri, fetchOptions); // TODO can we just send an undefined
  // param and avoid the options nonsense?
  return response.json();
};

/**detectMediaType
 * Detects whether the given URL is a '"video"', '"image"', and otherwise,
 * returns `null`.
 *
 * @param url A string url with a file extension.
 * @returns A string, one of `"video"` or `"image"`, or null.
 */
function detectMediaType(url: string) {
  if (typeof url !== 'string') return null;
  const extension = url
    .split('/')
    .slice(-1)[0]
    .split('.')
    .slice(-1)[0]
    .toLowerCase();
  if (IMAGE_EXTENSIONS.includes(extension)) return 'image';
  if (VIDEO_EXTENSIONS.includes(extension)) return 'video';
  return null;
}
/**
 * getOptions
 *
 * Get the promo-button configuration object.
 *
 * @param options an options object from the user or undefined
 * @returns Object with promo-button configuration key-value pairs.
 */
function getOptions(options?: object | undefined) {
  return Object.assign(options || {}, defaultOptions);
}
// Fall back to default handling
export { fetcher, detectMediaType, getOptions };
