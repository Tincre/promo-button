/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export function FirstWord({ word, isHero }: { word: string; isHero: any }) {
  return !isHero ? (
    <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-gray-300 group-hover:from-gray-700 group-hover:to-gray-900 block">
      {word}
    </span>
  ) : (
    <span className="text-2xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-gray-300 group-hover:from-gray-700 group-hover:to-gray-900 block">
      {word}
    </span>
  );
}
export function SecondWord({ word, isHero }: { word: string; isHero: any }) {
  return !isHero ? (
    <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-l from-gray-50 to-gray-300 group-hover:from-gray-700 group-hover:to-gray-900 block">
      {word}
    </span>
  ) : (
    <span className="text-2xl animate-pulse bg-clip-text text-transparent bg-gradient-to-l from-gray-50 to-gray-300 group-hover:from-gray-700 group-hover:to-gray-900 block">
      {word}
    </span>
  );
}
export function ThirdWord({ word, isHero }: { word: string; isHero: any }) {
  return !isHero ? (
    <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-l from-red-500 to-red-700 group-hover:from-red-700 group-hover:to-red-900 block">
      {word}
    </span>
  ) : (
    <span className="text-2xl animate-pulse bg-clip-text text-transparent bg-gradient-to-l from-red-500 to-red-700 group-hover:from-red-700 group-hover:to-red-900 block">
      {word}
    </span>
  );
}
export default function ThreeWords({
  words,
  isHero,
}: {
  words: undefined | Array<string>;
  isHero: undefined | boolean;
}) {
  if (typeof words === 'undefined') words = ['Real', 'Easy', 'Ads!'];

  let [word1, word2, word3] = words;
  return (
    <>
      <FirstWord word={word1} isHero={isHero} />
      <SecondWord word={word2} isHero={isHero} />
      <ThirdWord word={word3} isHero={isHero} />
    </>
  );
}
