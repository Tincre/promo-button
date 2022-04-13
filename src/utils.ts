/* eslint-disable no-unused-vars */

// import { useRef, useState, useEffect, MutableRefObject } from 'react';
import React from 'react';

import { IMAGE_EXTENSIONS, VIDEO_EXTENSIONS } from './constants';

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

// Fall back to default handling
export { fetcher, detectMediaType };
