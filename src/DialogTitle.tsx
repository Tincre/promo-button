/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { XIcon } from './Icons';
import { Dialog } from '@headlessui/react';

export function CloseButtonXIcon({ onClose }: { onClose: any }) {
  return (
    <div className="promo-button-close-icon-outer">
      <button
        type="button"
        className="promo-button-close-icon-inner"
        onClick={onClose}
      >
        <span className="promo-sr-only">Close</span>
        <XIcon className="promo-button-close-icon-size" aria-hidden="true" />
      </button>
    </div>
  );
}
export default function DialogTitle({
  isSubmitted,
  setIsOpen,
}: {
  isSubmitted: any;
  setIsOpen: any;
}) {
  return (
    <Dialog.Title as="h3" className="promo-button-dialog-title-text">
      {!isSubmitted ? `Start a campaign` : `Success!`}{' '}
      <div className="promo-button-close-icon-outer">
        <button
          type="button"
          className="promo-button-close-icon-inner"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <span className="promo-sr-only">Close</span>
          <XIcon className="promo-button-close-icon-size" aria-hidden="true" />
        </button>
      </div>
    </Dialog.Title>
  );
}
