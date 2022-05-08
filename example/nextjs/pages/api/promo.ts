// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Promo API route support: https://tincre.dev/docs/reference
import { generateAccessToken } from '../../lib/promo-node-utils';
import { getToken } from '../../../../dist/lib/getToken'; //'@tincre/promo-button';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const clientSecret: string = process.env.PROMO_CLIENT_SECRET || '';
  const appId: string = process.env.PROMO_APP_ID || '';
  const clientId: string = process.env.PROMO_CLIENT_ID || '';
  let accessTokenSigned: string = generateAccessToken(
    'http://localhost:3000',
    clientId,
    appId,
    clientSecret
  );

  let resultToken: string = await getToken(accessTokenSigned);
  const promoApiUrl = 'https://promo.api.tincre.dev/campaigns';
  // get data from client
  const data = req.body;
  console.debug(
    `/api/promo received ${data} from the frontend. Preparing request to ${promoApiUrl} now.`
  );
  // build request options
  const promoApiRequestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resultToken}`,
    },
    body: data,
  };
  // send request to tincre.dev Promo API
  // forward the status value
  const promoApiResponse = await fetch(promoApiUrl, promoApiRequestOptions);
  if (promoApiResponse.status === 200) {
    res.status(200);
  } else {
    res.status(promoApiResponse.status);
  }
}
