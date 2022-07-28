export default function HowItWorks({
  communityLink,
  docsLink,
}: {
  communityLink?: string;
  docsLink?: string;
}) {
  return (
    <div id="how-it-works-post-campaign-submission" className="">
      <p className="font-leading mt-10 w-full">
        <span className="font-bold text-xl">1. </span>
        <span className="font-medium text-sm">
          Your ads are optimizing. Check your email for the invoice link.{' '}
          <span className="font-normal text-gray-800">
            Once paid, your campaign will be serving ads.
          </span>
        </span>
      </p>
      <p className="font-leading mt-5 w-full">
        <span className="font-bold text-xl">2. </span>
        <span className="font-medium text-sm">
          {`Monitor your ads right from your inbox. `}
          <span className="font-normal text-gray-800">{`We'll send you daily reports with just what's important.`}</span>
        </span>
      </p>
      <p className="font-leading mt-5 w-full">
        <span className="font-bold text-xl">3. </span>
        <span className="font-medium text-sm">
          {`Focus on what matters: your music, your fans, you. `}
          <span className="font-normal text-gray-800">{`You're now rocking with your ad campaign!`}</span>
        </span>
      </p>
      <p className="font-leading mt-10 w-full">
        <span className="font-bold text-lg">Need anything? </span>
        <span className="font-medium text-xs">
          Check out our{' '}
          <a
            href={docsLink || 'https://community.tincre.dev'}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:underline hover:text-red-700 active:text-red-700"
          >
            FAQs and docs
          </a>{' '}
          or join our{' '}
          <a
            href={communityLink || 'https://community.tincre.dev'}
            className="font-bold text-black hover:underline hover:text-red-700 active:text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </a>
          .
        </span>
      </p>

      <p className="text-xs mt-5 text-gray-600 w-full italic mx-auto text-center">
        Click the <span className="font-bold text-gray-800 uppercase">X</span>{' '}
        above or anywhere outside of this dialogue to close.
      </p>
    </div>
  );
}
