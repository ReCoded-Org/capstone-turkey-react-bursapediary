import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { register } from '../../features/user/userAPI';
import { SIGN_IN_ROUTE } from '../../routes';

function SignUpForm() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { isSuccessRegister, currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccessRegister) {
      navigate(SIGN_IN_ROUTE);
    }
  }, [isSuccessRegister, currentUser, navigate]);
  return (
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        register(dispatch, values);
        setSubmitting(false);
      }}
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t('authForms.emailInvalid'))
          .required(t('authForms.emailRequired')),
        password: Yup.string().required(t('authForms.passwordRequired')),
        username: Yup.string().required(t('authForms.usernameRequired')),
        confirmPassword: Yup.string()
          .required(t('authForms.confirmPasswordReq'))
          .when('password', {
            is: (val) => !!(val && val.length > 0),
            then: Yup.string().oneOf(
              [Yup.ref('password')],
              t('authForms.passwordMatch'),
            ),
          }),
      })}
    >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-2"
                htmlFor="username"
              >
                {t('authForms.username')}
                <input
                  className="leading-tight border-1 shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 outline outline-1 focus:shadow-outline"
                  id="username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-2"
                htmlFor="email"
              >
                {t('authForms.email')}
                <input
                  className="leading-tight border-1 shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 outline outline-1 focus:shadow-outline"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-4"
                htmlFor="password"
              >
                {t('authForms.password')}
                <input
                  className="leading-tight shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline outline-1  focus:shadow-outline"
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-1 pb-4">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-4"
                htmlFor="confirmPassword"
              >
                {t('authForms.confirmPassword')}
                <input
                  className="leading-tight shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline outline-1  focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-2 flex justify-center sm:block">
              <button
                className="w-full h-8  bg-[#6A2C70] hover:bg-[#803886] items-center text-white text-sm py-1 px-12  font-semibold rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                {t('auth.signup')}
              </button>
            </div>
            <div className="mb-8 text-center pt-2">
              <a className="text-sm" href="/login">
                {t('authForms.alreadyHave')}
                <p className="text-[#0038FF] font-bold inline-block pl-1">
                  {t('auth.signin')}
                </p>
              </a>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
