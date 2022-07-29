/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export function FirstWord({ word, isHero }: { word: string; isHero: any }) {
  return !isHero ? (
    <span className="promo-animate-pulse promo-bg-clip-text promo-text-transparent promo-bg-gradient-to-r promo-from-gray-50 promo-to-gray-300 group-hover:promo-from-gray-700 group-hover:promo-to-gray-900 block">
      {word}
    </span>
  ) : (
    <span className="promo-text-2xl promo-animate-pulse promo-bg-clip-text promo-text-transparent promo-bg-gradient-to-r promo-from-gray-50 promo-to-gray-300 group-hover:promo-from-gray-700 group-hover:promo-to-gray-900 promo-block">
      {word}
    </span>
  );
}
export function SecondWord({ word, isHero }: { word: string; isHero: any }) {
  return !isHero ? (
    <span className="promo-animate-pulse promo-bg-clip-text promo-text-transparent promo-bg-gradient-to-l promo-from-gray-50 promo-to-gray-300 group-hover:promo-from-gray-700 group-hover:promo-to-gray-900 promo-block">
      {word}
    </span>
  ) : (
    <span className="promo-text-2xl promo-animate-pulse promo-bg-clip-text text-transparent promo-bg-gradient-to-l promo-from-gray-50 promo-to-gray-300 group-hover:promo-from-gray-700 group-hover:promo-to-gray-900 block">
      {word}
    </span>
  );
}
export function ThirdWord({ word, isHero }: { word: string; isHero: any }) {
  return !isHero ? (
    <span className="promo-animate-pulse promo-bg-clip-text promo-text-transparent promo-bg-gradient-to-l promo-from-red-500 promo-to-red-700 promo-group-hover:promo-from-red-700 group-hover:promo-to-red-900 promo-block">
      {word}
    </span>
  ) : (
    <span className="promo-text-2xl promo-animate-pulse promo-bg-clip-text promo-text-transparent promo-bg-gradient-to-l promo-from-red-500 promo-to-red-700 group-hover:promo-from-red-700 group-hover:promo-to-red-900 promo-block">
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
