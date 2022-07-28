export function ImageUploadError() {
  return (
    <div>
      <p className="promo-button-image-upload-error">
        Please upload an image or video in order to run your campaign.
      </p>
    </div>
  );
}

export function TargetLinkError() {
  return (
    <div>
      <p className="promo-button-target-link-error">
        It appears the submitted link is not a valid url. Please try again.
      </p>
    </div>
  );
}
