/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  SpotifyIcon,
  GithubIcon,
  InstagramIcon,
  SnapchatIcon,
  AppleIcon,
  YoutubeIcon,
  InternetIcon,
} from './Icons';
function resolveTargetLink(targetLink: string) {
  const magicNumber = 8;
  if (targetLink?.includes('spotify')) return 'Spotify';
  if (targetLink?.includes('youtube')) return 'YouTube';
  if (targetLink?.includes('youtu.be')) return 'YouTube';
  if (targetLink?.includes('instagram')) return 'Instagram';
  if (targetLink?.includes('facebook')) return 'Facebook';
  if (targetLink?.includes('apple')) return 'Apple';
  if (targetLink?.includes('twitter.com')) return 'Twitter';
  if (targetLink?.length > magicNumber) return 'Web Url';
  return targetLink;
}
export default function Socials({
  props,
}: {
  props: { socials: any; targetLink: any };
}) {
  if (!props) return <></>;
  const { socials, targetLink } = props;
  const coreStyleClass = 'm-2 antialiased';
  let highlightedStyleClass = `origin-center transform-gpu scale-150 ${coreStyleClass} text-3xl text-red-700 font-bold`;

  const styleClass = `${coreStyleClass} text-2xl text-gray-500`;

  function Icon({ keyName, highlight }: { keyName: string; highlight: any }) {
    if (keyName === 'LinkedIn')
      return highlight ? (
        <LinkedInIcon className={highlightedStyleClass} />
      ) : (
        <LinkedInIcon className={styleClass} />
      );
    if (keyName === 'Twitter')
      return highlight ? (
        <TwitterIcon className={highlightedStyleClass} />
      ) : (
        <TwitterIcon className={styleClass} />
      );
    if (keyName === 'Facebook')
      return highlight ? (
        <FacebookIcon className={highlightedStyleClass} />
      ) : (
        <FacebookIcon className={styleClass} />
      );
    if (keyName === 'Github')
      return highlight ? (
        <GithubIcon className={highlightedStyleClass} />
      ) : (
        <GithubIcon className={styleClass} />
      );
    if (keyName === 'Instagram')
      return highlight ? (
        <InstagramIcon className={highlightedStyleClass} />
      ) : (
        <InstagramIcon className={styleClass} />
      );
    if (keyName === 'Spotify')
      return highlight ? (
        <SpotifyIcon className={highlightedStyleClass} />
      ) : (
        <SpotifyIcon className={styleClass} />
      );
    if (keyName === 'Snapchat')
      return highlight ? (
        <SnapchatIcon className={highlightedStyleClass} />
      ) : (
        <SnapchatIcon className={styleClass} />
      );
    if (keyName === 'Apple')
      return highlight ? (
        <AppleIcon className={highlightedStyleClass} />
      ) : (
        <AppleIcon className={styleClass} />
      );
    if (keyName === 'YouTube')
      return highlight ? (
        <YoutubeIcon className={highlightedStyleClass} />
      ) : (
        <YoutubeIcon className={styleClass} />
      );
    if (keyName === 'Web Url')
      return highlight ? (
        <InternetIcon className={highlightedStyleClass} />
      ) : (
        <InternetIcon className={styleClass} />
      );
    else return <></>;
  }
  function SocialNetworks({ socials }: { socials: Array<any> }) {
    const result = Object.keys(socials).map((keyName, keyIndex) => {
      return (
        <Icon
          key={`${keyIndex}-socials-${keyName}`}
          keyName={keyName}
          highlight={keyName === resolveTargetLink(targetLink)}
        />
      );
    });
    return <>{result}</>;
  }
  return (
    <div className="inline-flex">
      {' '}
      <SocialNetworks socials={socials} />
    </div>
  );
}
