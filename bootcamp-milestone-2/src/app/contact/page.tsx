export default function Contact() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <form className="flex flex-col justify-around w-150 h-100 bg-white p-10 rounded-xl font-serif">
        <label className="block">Name:</label>
        <input
          className="block border border-slate-400 w-full h-10 rounded-md"
          type="text"
          id="name"
        />
        <label className="block">Email:</label>
        <input
          className="block border border-slate-400 w-full h-10 rounded-md"
          type="email"
          id="email"
        />
        <label className="block">Comments:</label>
        <input
          className="block border border-slate-400 w-full h-10 rounded-md"
          id="comments"
        ></input>
        <div className="w-full flex justify-center items-center">
          <input
            type="submit"
            className="font-mono bg-green-300 w-20 h-10 rounded-md mt-10"
          />
        </div>
      </form>
    </div>
  );
}
