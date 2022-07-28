import { SpinningCircleIcon } from './Icons';

export default function SubmitButton({
  isSubmitting,
  fileImage,
  text,
}: {
  isSubmitting: any;
  fileImage: any;
  text?: string | undefined;
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting && fileImage}
      className={`${
        !isSubmitting ? '' : 'promo-button-dialog-submission-button-disabled'
      } promo-button-dialog-submission-button`}
    >
      {!isSubmitting ? <></> : <SpinningCircleIcon />}
      {text || 'Submit'}
    </button>
  );
}
