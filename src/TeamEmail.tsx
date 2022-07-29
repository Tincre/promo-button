export default function TeamEmail({
  isSubmitted,
  isSubmitting,
}: {
  isSubmitted: any;
  isSubmitting: any;
}) {
  let buttonStyle = `promo-inline-flex promo-justify-center promo-w-full promo-rounded-md promo-border promo-border-transparent promo-shadow-sm promo-px-4 promo-py-2 promo-bg-black promo-text-base promo-font-medium promo-text-white hover:promo-bg-gray-200 focus:promo-outline-none focus:promo-ring-2 focus:promo-ring-offset-2 focus:promo-ring-red-700 hover:promo-text-black sm:promo-text-sm`;
  return (
    <div>
      {' '}
      {!isSubmitted ? (
        <>
          <span className="promo-block promo-text-xs promo-italic promo-font-light promo-text-center promo-mb-1">
            Advanced users
          </span>
          <a
            target="_blank"
            className={
              !isSubmitting
                ? buttonStyle
                : buttonStyle + 'promo-disabled promo-bg-gray-800'
            }
            href={
              'mailto:team@b00st.com?&subject=B00ST%20ad%20campaign&body=Start%20a%20new%20campaign'
            }
            rel="noreferrer"
          >
            {'team@b00st.com'}
          </a>
        </>
      ) : null}
    </div>
  );
}
