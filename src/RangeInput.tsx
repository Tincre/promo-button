import React, { useState } from 'react';

export default function RangeInput() {
  const [rangeval, setRangeval] = useState('250');
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
