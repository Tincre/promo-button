/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { SpinningCircleIcon } from './Icons';

export default function SubmitButton({
  isSubmitting,
  fileImage,
  text,
}: {
  isSubmitting: any;
  fileImage: any;
  text?: string | undefined;
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting && fileImage}
      className={`${
        !isSubmitting ? '' : 'promo-button-dialog-submission-button-disabled'
      } promo-button-dialog-submission-button`}
    >
      {!isSubmitting ? <></> : <SpinningCircleIcon />}
      {text || 'Submit'}
    </button>
  );
}
