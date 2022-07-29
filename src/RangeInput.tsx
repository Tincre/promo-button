/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useState } from 'react';

/**
 * @description
 * The ad budget slider component. Input is required by the user though
 * has a default selection of 250.
 *
 * > Refer to this input by its id `budget`.
 *
 * @param rangeVal - the default value for user selection between $50 and $10,000, inclusive.
 */
export default function RangeInput({ rangeVal }: { rangeVal?: number }) {
  const [rangeval, setRangeval] = useState(
    !!rangeVal && rangeVal > 49.99 && rangeVal < 10000.01
      ? `${rangeVal}`
      : '250'
  );
  const minSpend = 50;
  const maxSpend = 10000;
  return (
    <div className="promo-mt-3">
      <label htmlFor="budget" className="promo-button-range-input-label">
        {`Budget: $${rangeval}`}
      </label>
      <div className="promo-button-range-input-container">
        <input
          className="promo-button-range-input"
          type="range"
          name="budget"
          id="budget"
          defaultValue={rangeval}
          min={minSpend}
          max={maxSpend}
          step={25}
          onChange={(event) => setRangeval(event.target.value)}
        />
      </div>
    </div>
  );
}
