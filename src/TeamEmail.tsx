export default function TeamEmail({
  isSubmitted,
  isSubmitting,
}: {
  isSubmitted: any;
  isSubmitting: any;
}) {
  let buttonStyle = `inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 hover:text-black sm:text-sm`;
  return (
    <div>
      {' '}
      {!isSubmitted ? (
        <>
          <span className="block text-xs italic font-light text-center mb-1">
            Advanced users
          </span>
          <a
            target="_blank"
            className={
              !isSubmitting ? buttonStyle : buttonStyle + 'disabled bg-gray-800'
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
