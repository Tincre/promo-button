/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export default function HowItWorks({
  communityLink,
  docsLink,
}: {
  communityLink?: string;
  docsLink?: string;
}) {
  return (
    <div id="how-it-works-post-campaign-submission" className="">
      <p className="promo-font-leading promo-mt-10 promo-w-full">
        <span className="promo-font-bold promo-text-xl">1. </span>
        <span className="promo-font-medium promo-text-sm">
          Your ads are optimizing. Check your email for the invoice link.{' '}
          <span className="promo-font-normal promo-text-gray-800">
            Once paid, your campaign will be serving ads.
          </span>
        </span>
      </p>
      <p className="promo-font-leading promo-mt-5 promo-w-full">
        <span className="promo-font-bold promo-text-xl">2. </span>
        <span className="promo-font-medium promo-text-sm">
          {`Monitor your ads right from your inbox. `}
          <span className="promo-font-normal promo-text-gray-800">{`We'll send you daily reports with just what's important.`}</span>
        </span>
      </p>
      <p className="promo-font-leading promo-mt-5 promo-w-full">
        <span className="promo-font-bold promo-text-xl">3. </span>
        <span className="promo-font-medium promo-text-sm">
          {`Focus on what matters: your music, your fans, you. `}
          <span className="promo-font-normal text-gray-800">{`You're now rocking with your ad campaign!`}</span>
        </span>
      </p>
      <p className="promo-font-leading promo-mt-10 promo-w-full">
        <span className="promo-font-bold promo-text-lg">Need anything? </span>
        <span className="promo-font-medium promo-text-xs">
          Check out our{' '}
          <a
            href={docsLink || 'https://community.tincre.dev'}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-font-bold promo-text-black hover:promo-underline hover:promo-text-red-700 active:promo-text-red-700"
          >
            FAQs and docs
          </a>{' '}
          or join our{' '}
          <a
            href={communityLink || 'https://community.tincre.dev'}
            className="promo-font-bold promo-text-black hover:promo-underline hover:promo-text-red-700 active:promo-text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </a>
          .
        </span>
      </p>

      <p className="promo-text-xs promo-mt-5 promo-text-gray-600 promo-w-full promo-italic promo-mx-auto promo-text-center">
        Click the{' '}
        <span className="promo-font-bold promo-text-gray-800 promo-uppercase">
          X
        </span>{' '}
        above or anywhere outside of this dialogue to close.
      </p>
    </div>
  );
}
