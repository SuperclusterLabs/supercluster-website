export default function EmailForm() {
  return (
    <div className="self-center mt-10">
      <p className="text-center text-xl">Subscribe for updates</p>
      <form
        className="w-full max-w-sm mt-4"
        action="https://getform.io/f/fdb80384-b894-46d2-acd6-7dc455b8555d"
        method="POST"
        acceptCharset="UTF-8"
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="block p-4 text-xl appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            name="email"
            required
            placeholder="Email"
            aria-label="email"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-xl border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
