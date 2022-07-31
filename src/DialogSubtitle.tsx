/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export default function DialogSubtitle({ isSubmitted }: { isSubmitted: any }) {
  return (
    <div className="promo-mt-2">
      <p className="promo-button-dialog-subtitle-text">
        {!isSubmitted
          ? `We need just a few items to start.`
          : `Check your email for a link to fund your campaign.`}
      </p>
    </div>
  );
}
