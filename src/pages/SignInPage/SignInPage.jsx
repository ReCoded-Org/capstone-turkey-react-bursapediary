import { useTranslation } from 'react-i18next';

import SignInForm from '../../components/SignInForm/SignInForm';
import AuthenticationModuleSpan from '../../components/AuthenticationModuleSpan/AuthenticationModuleSpan';

function SignIn() {
  const { t } = useTranslation();

  return (
    <div className="flex sm:grid h-100 mb-16">
      <div className="flex justify-center w-full sm:grid grid-cols-7 gap-2">
        <AuthenticationModuleSpan />
        <div className="col-span-3">
          <div className="flex flex-col items-center justify-center h-screen mx-auto pb-10">
            <div className="w-full max-w-xs">
              <h1 className="text-[#6A2C70] text-4xl font-semibold mb-24 text-center sm:text-left">
                {t('auth.signin')}
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
