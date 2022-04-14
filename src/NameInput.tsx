export default function NameInput() {
  return (
    <div className="mt-0">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Artist name{' '}
        <span className="text-xs italic text-muted">{`as you'd like it to appear in your ads`}</span>
      </label>
      <div className="mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 border-black focus:ring-border-black focus:border-transparent rounded-md"
          placeholder="Beyoncé"
          required
        />
      </div>
    </div>
  );
}
