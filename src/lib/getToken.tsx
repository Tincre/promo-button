/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import fetch from 'cross-fetch';
/**
 * getToken
 *
 * Given a JWT encoded accessToken query the Tincre promo-api for
 * a usable refresh token for application calls.
 *
 * This method decodes the jwt returned from the Tincre promo-api
 * but as it is to be used on the client, _does not validate the jwt_.
 *
 * > :hot_pepper: :lock: Validating or encoding a JWT must be done on your backend, as they
 * are signed with your `clientSecret` value from the dashboard.
 *
 * @param accessToken string JWT-encoded access token per
 * https://tincre.dev/docs/guides/how-to-auth.
 *
 * @returns a usable refresh token you can store on the client.
 */
export async function getToken(accessToken: string): Promise<string> {
  const url = 'https://promo.api.tincre.dev/token';
  let refreshToken: string;
  // Example POST method implementation:
  // Default options are marked with *
  console.debug(`getToken: Sending POST request to backend promo-api ${url}`);
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  console.debug(`getToken: awaiting response JSON`);
  const responseToDecode: any = await response.json(); // parses JSON response into native JavaScript objects
  refreshToken = responseToDecode?.token;
  console.debug(`getToken: Retrieved refresh token: ${refreshToken}`);
  return refreshToken;
}
