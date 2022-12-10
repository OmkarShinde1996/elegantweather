

const InputForm = ({}) => {
  return (
    <form className="pl-14 flex">
      <input
        type="text"
        placeholder="Another location"
        className="placeholder:text-white/60 placeholder:font-light font-light mt-4 h-10 w-[70%] bg-transparent text-white border-b-2 border-white/70 outline-none"
      />
      <div className="flex justify-end flex-1">
        <button
          type="submit"
          className="flex items-center justify-center w-14 bg-orange-400 hover:bg-orange-500"
        >
          <svg
            className="h-[15px] w-[15px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default InputForm;
