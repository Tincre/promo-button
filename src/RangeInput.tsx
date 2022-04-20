import React, { useState } from 'react';

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
    <div className="mt-3">
      <label
        htmlFor="budget"
        className="block text-sm font-medium text-gray-700"
      >
        {`Budget: $${rangeval}`}
      </label>
      <div className="mt-1 rounded-md">
        <input
          className="block w-full pl-16 sm:pl-14 sm:text-sm border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-black focus:ring-border-black hover:border-transparent rounded-md"
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
