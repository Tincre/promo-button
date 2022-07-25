/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from 'react';
import facebook from "super-tiny-icons/images/svg/facebook.svg";
import twitter from 'super-tiny-icons/images/svg/twitter.svg';
import linkedin from 'super-tiny-icons/images/svg/linkedin.svg';
import spotify from 'super-tiny-icons/images/svg/spotify.svg';
import github from 'super-tiny-icons/images/svg/github.svg';
import instagram from 'super-tiny-icons/images/svg/instagram.svg';
import snapchat from 'super-tiny-icons/images/svg/snapchat.svg';
import apple from 'super-tiny-icons/images/svg/apple.svg';
import youtube from 'super-tiny-icons/images/svg/youtube.svg';
import internet from 'super-tiny-icons/images/svg/wifi.svg';
export function XIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function BaseIcon({src, className, width, height}: {src: string; className: string; width?: string | number | undefined; height?: string | number | undefined}) {
  return <img src={src} height={height || 25} width={width || 25} className={className} />
}
export function FacebookIcon({className, }: {className: string}) {
  return <BaseIcon src={facebook} className={className} />
}

export function TwitterIcon({className, }: {className: string}) {
  return <BaseIcon src={twitter} className={className} />
}

export function LinkedInIcon({className, }: {className: string}) {
  return <BaseIcon src={linkedin} className={className} />
}


export function SpotifyIcon({className, }: {className: string}) {
  return <BaseIcon src={spotify} className={className} />
}
export function GithubIcon({className, }: {className: string}) {
  return <BaseIcon src={github} className={className} />
}
export function InstagramIcon({className, }: {className: string}) {
  return <BaseIcon src={instagram} className={className} />
}
export function SnapchatIcon({className, }: {className: string}) {
  return <BaseIcon src={snapchat} className={className} />
}
export function AppleIcon({className, }: {className: string}) {
  return <BaseIcon src={apple} className={className} />
}

export function YoutubeIcon({className, }: {className: string}) {
  return <BaseIcon src={youtube} className={className} />
}
export function InternetIcon({className, }: {className: string}) {
  return <BaseIcon src={internet} className={className} />
}


