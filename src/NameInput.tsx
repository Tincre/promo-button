/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * @description The ad title input component. Refer to this input via the id `name`, if needed.
 * This input is required.
 *
 * @param placeholder - the placeholder text for the HTML input tag.
 */
export default function NameInput({ placeholder }: { placeholder?: string }) {
  return (
    <div className="mt-0">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Ad title{' '}
        <span className="text-xs italic text-muted">{`as you'd like it to display on your ads`}</span>
      </label>
      <div className="mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 border-black focus:ring-border-black focus:border-transparent rounded-md"
          placeholder={placeholder || `The Kool-Aid Man`}
          required
        />
      </div>
    </div>
  );
}
