/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useEffect } from 'react';

/*
 * Add a script via a custom React hook.
 *
 * https://gist.github.com/BetterProgramming/320d5b74494f37fd544000ef193f1523#file-useeffect-js
 *
 * @param resourceUrl a string url to an external script resource
 * @returns a callback that automatically removes the script from the DOM
 */
export function useScript(resourceUrl: string) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
}
