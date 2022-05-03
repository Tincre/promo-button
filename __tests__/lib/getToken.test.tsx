import jwt from 'jsonwebtoken';
import { getToken } from '../../.';

jest.setTimeout(10000);

/**
 * Encode (and sign) a given object as JWT.
 *
 * @param data object to encode in base64 and sign via HMAC and the given
 *     passphrase
 * @param passphrase string secret passphrase for producing the HMAC hash of the
 *     data
 * @returns string JWT token
 */
function encodeJwt(data: object, passphrase: string): string {
  if (typeof data !== 'object')
    throw new Error(
      'data is not a JavaScript object. Do better next time, please.'
    );
  const token = jwt.sign(data, passphrase);
  return token;
}

describe('getToken', () => {
  const rightnow = Date.now();
  let accessToken: any = {
    sub: '',
    iss: 'http://localhost:8000',
    cid: 'IzJK43FlPjJX9oY2REZoj0iJOsPg',
    aid: 'uWR2Nby08TMUiYURXR2wDZlNoFoi',
    iat: rightnow,
    exp: rightnow + 1800, // 30 minutes
    scope: '',
    token_type: 'Access',
  };
  const clientSecret = 'qK2FXA-hnuASPSFMNTQnQu3xdszaCeLlQ3rawYeliWr5SzGP'; // never do this in your client side js but this is safe due to it being a testing application alone

  let accessTokenSigned: string = encodeJwt(accessToken, clientSecret);

  it('returns a string', async () => {
    let resultToken: string = await getToken(accessTokenSigned);
    expect(typeof resultToken).toBe('string');
  });
});
