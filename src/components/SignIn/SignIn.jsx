import SignInForm from './SignInForm';

function SignIn() {
  return (
    <div className="flex sm:grid h-100 mb-16">
      <div className="flex justify-center w-full sm:grid grid-cols-7 gap-2">
        <div className="hidden sm:grid col-span-3 w-full rectengle bg-[#FEEEEE]">
          a
        </div>
        <div className="col-span-3">
          <div className="flex flex-col items-center justify-center h-screen mx-auto">
            <div className="w-full max-w-xs">
              <h1 className="text-[#6A2C70] text-4xl font-semibold mb-16 text-center sm:text-left">
                Login
              </h1>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
