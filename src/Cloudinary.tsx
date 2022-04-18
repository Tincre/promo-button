import { detectMediaType } from './utils';

function showWidget(setFileImage: any) {
  if (typeof window.cloudinary === 'undefined') return null;
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: `b00st`,
      uploadPreset: `uscb5ifq`,
      folder: 'B00STButton',
      multiple: true,
    },
    (error: any, result: any) => {
      if (!error && result && result.event === 'success') {
        setFileImage({ ...result.info });
      }
      if (error) {
        console.error(error.message);
      }
    }
  );
  document?.getElementById('cloudinary-upload-widget')?.addEventListener(
    'click',
    function () {
      widget.open();
    },
    true
  );
}

export default function Cloudinary({
  imageData,
  setFileImage,
}: {
  imageData: any;
  setFileImage: any;
}) {
  // TODO add func input for alt text (should take copy generated for ad)
  const mediaUrlType = detectMediaType(imageData?.secure_url);
  // TODO render <video> or <img> as appropriate
  return (
    <>
      <div className="mt-3" id="cloudinary-upload-widget">
        <label
          htmlFor="cloudinary-upload-widget"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Upload an image or video
        </label>
        {!imageData ? (
          <button
            type="button"
            id="cloudinary-upload-widget"
            className="inline-flex justify-center w-full rounded-md border border-black shadow-sm px-4 py-2 bg-gray-50 text-base font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 hover:text-gray-900 sm:text-sm"
            onClick={() => showWidget(setFileImage)}
          >
            Ad creative upload tool
          </button>
        ) : (
          <div className="text-center px-4 py-4">
            <button type="button" onClick={() => showWidget(setFileImage)}>
              {!!mediaUrlType && mediaUrlType === 'image' ? (
                <img
                  className="rounded-md max-h-48"
                  src={imageData.secure_url}
                  alt="uploaded b00st.com ad campaign static media"
                />
              ) : !!mediaUrlType && mediaUrlType === 'video' ? (
                <video
                  className="rounded-md max-h-48"
                  controls
                  src={imageData.secure_url}
                ></video>
              ) : null}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
