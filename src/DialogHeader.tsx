import DialogSubtitle from './DialogSubtitle';
import RealEasyLogo from './RealEasyLogo';
import DialogTitle from './DialogTitle';

export default function DialogHeader({
  isSubmitted,
  setIsOpen,
  logoSrc,
}: {
  isSubmitted: any;
  setIsOpen: any;
  logoSrc?: string | undefined;
}) {
  return (
    <div id="dialog-header">
      <RealEasyLogo src={logoSrc} />
      <div className="promo-mt-3 promo-text-center promo-sm:mt-5">
        <DialogTitle setIsOpen={setIsOpen} isSubmitted={isSubmitted} />
        <DialogSubtitle isSubmitted={isSubmitted} />
      </div>
    </div>
  );
}
