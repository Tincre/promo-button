import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaSnapchatSquare,
  FaApple,
  FaYoutubeSquare,
  FaInternetExplorer,
} from 'react-icons/fa';

function resolveTargetLink(targetLink: string) {
  const magicNumber = 8;
  if (targetLink?.includes('spotify')) return 'Spotify';
  if (targetLink?.includes('youtube')) return 'YouTube';
  if (targetLink?.includes('youtu.be')) return 'YouTube';
  if (targetLink?.includes('instagram')) return 'Instagram';
  if (targetLink?.includes('facebook')) return 'Facebook';
  if (targetLink?.includes('apple')) return 'Apple';
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
        <FaLinkedin className={highlightedStyleClass} />
      ) : (
        <FaLinkedin className={styleClass} />
      );
    if (keyName === 'Twitter')
      return highlight ? (
        <FaTwitter className={highlightedStyleClass} />
      ) : (
        <FaTwitter className={styleClass} />
      );
    if (keyName === 'Facebook')
      return highlight ? (
        <FaFacebook className={highlightedStyleClass} />
      ) : (
        <FaFacebook className={styleClass} />
      );
    if (keyName === 'Github')
      return highlight ? (
        <FaGithub className={highlightedStyleClass} />
      ) : (
        <FaGithub className={styleClass} />
      );
    if (keyName === 'Instagram')
      return highlight ? (
        <FaInstagram className={highlightedStyleClass} />
      ) : (
        <FaInstagram className={styleClass} />
      );
    if (keyName === 'Spotify')
      return highlight ? (
        <FaSpotify className={highlightedStyleClass} />
      ) : (
        <FaSpotify className={styleClass} />
      );
    if (keyName === 'Snapchat')
      return highlight ? (
        <FaSnapchatSquare className={highlightedStyleClass} />
      ) : (
        <FaSnapchatSquare className={styleClass} />
      );
    if (keyName === 'Apple')
      return highlight ? (
        <FaApple className={highlightedStyleClass} />
      ) : (
        <FaApple className={styleClass} />
      );
    if (keyName === 'YouTube')
      return highlight ? (
        <FaYoutubeSquare className={highlightedStyleClass} />
      ) : (
        <FaYoutubeSquare className={styleClass} />
      );
    if (keyName === 'Web Url')
      return highlight ? (
        <FaInternetExplorer className={highlightedStyleClass} />
      ) : (
        <FaInternetExplorer className={styleClass} />
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
