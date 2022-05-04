import { getToken } from '../../.';
import { generateAccessToken } from '../test-utils';
jest.setTimeout(40000);

describe('getToken', () => {
  const clientSecret = 'qK2FXA-hnuASPSFMNTQnQu3xdszaCeLlQ3rawYeliWr5SzGP'; // never do this in your client side js but this is safe due to it being a testing application alone

  let accessTokenSigned: string = generateAccessToken(
    'http://localhost:3000',
    'IzJK43FlPjJX9oY2REZoj0iJOsPg',
    'uWR2Nby08TMUiYURXR2wDZlNoFoi',
    clientSecret
  );

  it('returns a string', async () => {
    let resultToken: string = await getToken(accessTokenSigned);
    expect(typeof resultToken).toBe('string');
  });
});
