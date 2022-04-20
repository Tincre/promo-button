function RealEasyImage({
  height,
  width,
  alt,
  src,
  href,
}: {
  height: number;
  width: number;
  alt: string;
  src: string;
  href: string;
}) {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      id="promo-modal-logo-image-link"
    >
      <img
        className=""
        src={src}
        alt={alt}
        height={height}
        width={width}
        style={{
          height: 'auto',
          width: '100%',
        }}
      />
    </a>
  );
}

export default function RealEasyLogo({
  src,
  href,
  alt,
}: {
  src?: string;
  href?: string;
  alt?: string;
}) {
  const defaultSrc: string =
    src ||
    'https://res.cloudinary.com/tincre/image/upload/v1650412626/tincre.dev/promo-button/tincre-brand-bg-white_rfsvqx.webp';
  const defaultHref: string = href || 'https://tincre.dev/promo';
  const defaultAlt: string =
    alt ||
    `Run awesome, epic, and cross-platform ads with a button press! Brought to you from Promo by tincre.dev.`;

  return (
    <div
      className="my-2 lg:my-5 relative flex justify-center content-center items-center"
      id="promo-modal-logo"
    >
      <div className="inline-flex justify-center items-center content-center text-xl text-red-700 font-semibold">
        <RealEasyImage
          height={40}
          width={212}
          src={defaultSrc}
          alt={defaultAlt}
          href={defaultHref}
        />
      </div>
    </div>
  );
}
