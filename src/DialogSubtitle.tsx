export default function DialogSubtitle({ isSubmitted }: { isSubmitted: any }) {
  return (
    <div className="mt-2">
      <p className="promo-button-dialog-subtitle-text">
        {!isSubmitted
          ? `We need just a few items to start.`
          : `Check your email for a link to fund your campaign.`}
      </p>
    </div>
  );
}
