export default function RealEasyLogo({ src }: { src: string }) {
  return (
    <div
      className="my-2 lg:my-5 relative flex justify-center content-center items-center"
      id="logo"
    >
      <div className="inline-flex justify-center items-center content-center text-xl text-red-700 font-semibold">
        <img
          className=""
          src={src}
          alt={
            'B00ST logo on a glorious white background. Run awesome cross-platform artist ads with a button press!'
          }
          height={40}
          width={212}
          style={{
            height: 'auto',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
}
