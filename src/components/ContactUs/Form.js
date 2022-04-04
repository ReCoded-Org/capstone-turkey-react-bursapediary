function Form() {
  return (
    <div className="flex justify-center p-6 w-3/4 rounded-lg bg-main text-center lg:text-center min-w-min items-center">
      <form className="w-full lg:text-center  ">
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control flex
                       w-full
                       px-3
                       py-1.5
                       text-base
                       font-normal
                       text-gray-700
                       bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Your name..."
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block
                       w-full
                       px-3
                       py-1.5
                       text-base
                       font-normal
                       text-gray-700
                       bg-white bg-clip-padding
                       border border-solid border-gray-300
                       rounded
                       transition
                       ease-in-out
                       m-0
                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Your e-mail address..."
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea13"
            rows="4"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="ease-in-out
                     lg:text-center
                      w-1/2
                      px-6
                      py-2.5
                      bg-[#6A2C70]
                      text-white
                      font-medium
                      text-xs
                      leading-tight
                      rounded
                      shadow-md
                      transition
                      duration-150"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default Form;
