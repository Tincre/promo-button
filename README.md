# promo-button, by [Tincre`.dev`](https://tincre.dev/promo)

One button to rule them all. At least all the ads ones. Seriously, don't 
do ads any other way; the rest just suck. 

## Making ads easy again

A [React](https://react.org) library to quickly add the button that powers
[b00st.com](https://b00st.com) to your apps, sites, and web properties. 

### Installation

Use your favorite package manager to rock installation of the promo button.

#### Yarn
```
yarn add @tincre/promo-button # -D if you want this as a dev dep
```
#### Npm

```
npm install @tincre/promo-button # --save-dev if you want it as a dev dep
```
### Usage

1. Create the frontend component 
2. Add backend functionality 
3. Update the `backend` property in your frontend from **1**
4. Add an environment file, e.g. `.env.local`

#### Frontend
To get going try throwing the below into your `index.jsx` or `index.tsx` file. 

```jsx 
import { PromoButton } from '@tincre/promo-button';

<PromoButton
  logoSrc="path-to-your-logo"
  words={['Real', 'Easy', 'Ads']} // Change these to your fav!
  shape="square"
  email="client-email" // should be updated by your authentication/user session object
  backend="my-backend-route" // express route or other backend
/>
 
```
> ℹ️ Though this is a client-side component library you will need to leverage some
> type of backend that proxies with the [Promo API](https://tincre.dev/promo/docs/reference). 

#### Backend 

This following example will work out of the box if you use Next.js.

We provide convenience helper methods `generateAccessToken` and `getToken` to help you 
securely authenticate requests to the [Promo API](https://tincre.dev/promo/docs/reference).

```ts 
// Promo API route support: https://tincre.dev/docs/reference
import { generateAccessToken } from '../../lib/promo-node-utils';
import { getToken } from '../../../../dist/lib/getToken'; //'@tincre/promo-button';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const clientSecret: string = process.env.PROMO_CLIENT_SECRET || '';
  const appId: string = process.env.PROMO_APP_ID || '';
  const clientId: string = process.env.PROMO_CLIENT_ID || '';
  let accessTokenSigned: string = generateAccessToken(
    'http://localhost:3000', // update w/hostname + base route
    clientId,
    appId,
    clientSecret
  );
  let resultToken: string = await getToken(accessTokenSigned);
  const promoApiUrl = 'https://promo.api.tincre.dev/campaigns';
  // get data from client
  const data = req.body;
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
```
#### Populate the `backend` prop
Depending on the route and your application populate the initial `backend` prop. You should populate this with the route pointing to the above function, inside your client `PromoButton`. 

#### Environment variables 

You'll need the following environment variables available in Node.js:

- `PROMO_CLIENT_ID`
- `PROMO_CLIENT_SECRET` 
- `PROMO_APP_ID`
- `PROMO_API_KEY` (optional)

These values can be found in the [Tincre.dev Dashboard](https://tincre.dev/dashboard)
after you're logged in and have created at least one app. 

##### Example `.env.local`

```env 
PROMO_API_KEY=
PROMO_CLIENT_ID=
PROMO_APP_ID=
PROMO_CLIENT_SECRET=
```

### Support 

- Documentation: [tincre.dev/docs](https://tincre.dev/docs)
- Guides and how-tos: [tincre.dev/docs/guides](https://tincre.dev/docs/guides) 
- Reference docs: [tincre.dev/docs/reference](https://tincre.dev/docs/reference)
- Community: [community.tincre.dev](https://community.tincre.dev)

### License 

This code is free to use for your commercial or personal projects. It is open-source 
licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).

You will see various headers throughout the codebase and can reference the license 
directly via [LICENSE](/LICENSE) herein.

### Development 

#### Releases 

We use [`npm`](https://npmjs.com) for releases. In particular, we use
`npm --publish` to get the job done.

Currently, only @thinkjrs has the ability to release. The following section 
is written for memory.

##### Release prep

Prior to using `npm --publish` a release tag needs to be created for
the library using our standard tagging practices. 

> Ensure that tests :white_check_mark: pass during this process prior to
releasing via npm.

##### Test release 

To do a proper release, ensure you're in the base repo directory and run 
`npm publish . --access public --dry-run`.

##### Release `latest` tag

To complete a full release to the `latest` npm `dist-tag`, ensure you're in
the base repo directory and run `npm publish . --access public`. 

:tada: That's it! :tada:
