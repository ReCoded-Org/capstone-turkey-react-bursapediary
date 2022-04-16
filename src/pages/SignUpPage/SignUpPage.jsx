import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AuthenticationModuleSpan from '../../components/AuthenticationModuleSpan/AuthenticationModuleSpan';

function SignIn() {
  return (
    <div className="flex sm:grid h-100 mb-16">
      <div className="flex justify-center w-full sm:grid grid-cols-7 gap-2">
        <AuthenticationModuleSpan />
        <div className="col-span-3">
          <div className="flex flex-col items-center justify-center h-screen mx-auto pb-12">
            <div className="w-full max-w-xs">
              <h1 className="text-[#6A2C70] text-4xl font-semibold mb-16 text-center pb-8 pt-12 ">
                Create Account
              </h1>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
