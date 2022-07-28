/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from 'react';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';
import spotify from './assets/spotify.svg';
import github from './assets/github.svg';
import instagram from './assets/instagram.svg';
import snapchat from './assets/snapchat.svg';
import apple from './assets/apple.svg';
import youtube from './assets/youtube.svg';
import internet from './assets/wifi.svg';

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
export function SpinningCircleIcon({ color }: { color?: string | undefined }) {
  const className = `animate-spin -ml-1 mr-3 h-5 w-5 ${
    color || 'text-gray-900'
  }`;
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
function BaseIcon({
  src,
  className,
  width,
  height,
  alt,
}: {
  src: string;
  className: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
  alt?: string | undefined;
}) {
  console.log(`BaseIcon: ${src}`);
  return (
    <img
      src={src}
      height={height || 25}
      width={width || 25}
      className={className}
      alt={alt}
    />
  );
}
export function FacebookIcon({ className }: { className: string }) {
  return <BaseIcon src={facebook} className={className} alt="Facebook icon" />;
}

export function TwitterIcon({ className }: { className: string }) {
  return <BaseIcon src={twitter} className={className} alt="Twitter icon" />;
}

export function LinkedInIcon({ className }: { className: string }) {
  return <BaseIcon src={linkedin} className={className} alt="LinkedIn icon" />;
}

export function SpotifyIcon({ className }: { className: string }) {
  return <BaseIcon src={spotify} className={className} alt="Spotify icon" />;
}
export function GithubIcon({ className }: { className: string }) {
  return <BaseIcon src={github} className={className} alt="Github icon" />;
}
export function InstagramIcon({ className }: { className: string }) {
  return (
    <BaseIcon src={instagram} className={className} alt="Instagram icon" />
  );
}
export function SnapchatIcon({ className }: { className: string }) {
  return <BaseIcon src={snapchat} className={className} alt="Snapchat icon" />;
}
export function AppleIcon({ className }: { className: string }) {
  return <BaseIcon src={apple} className={className} alt="Apple icon" />;
}

export function YoutubeIcon({ className }: { className: string }) {
  return <BaseIcon src={youtube} className={className} alt="YouTube icon" />;
}
export function InternetIcon({ className }: { className: string }) {
  return <BaseIcon src={internet} className={className} alt="Internet icon" />;
}
