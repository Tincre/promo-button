/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import DialogSubtitle from './DialogSubtitle';
import RealEasyLogo from './RealEasyLogo';
import DialogTitle from './DialogTitle';

export default function DialogHeader({
  isSubmitted,
  setIsOpen,
  logoSrc,
}: {
  isSubmitted: any;
  setIsOpen: any;
  logoSrc?: string | undefined;
}) {
  return (
    <div id="dialog-header">
      <RealEasyLogo src={logoSrc} />
      <div className="promo-mt-3 promo-text-center promo-sm:mt-5">
        <DialogTitle setIsOpen={setIsOpen} isSubmitted={isSubmitted} />
        <DialogSubtitle isSubmitted={isSubmitted} />
      </div>
    </div>
  );
}
