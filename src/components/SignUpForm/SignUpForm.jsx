import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../features/user/userAPI';
import { SIGN_IN_ROUTE, HOME_ROUTE } from '../../routes';

function SignUpForm() {
  const dispatch = useDispatch();
  const { isSuccessRegister, currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccessRegister) {
      navigate(SIGN_IN_ROUTE);
    }
    if (currentUser) {
      navigate(HOME_ROUTE);
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
          .email('*Email is invalid')
          .required('*Email is required'),
        password: Yup.string().required('*Password is required'),
        username: Yup.string().required('*Username is required'),
        confirmPassword: Yup.string()
          .required('*Confirm password is required')
          .when('password', {
            is: (val) => !!(val && val.length > 0),
            then: Yup.string().oneOf(
              [Yup.ref('password')],
              '*Passwords must be same',
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
                Username
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
                Email
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
                Password
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
                Confirm Password
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
                Sign Up
              </button>
            </div>
            <div className="mb-8 text-center pt-2">
              <a className="text-sm" href="/login">
                Already have an account?
                <p className="text-[#0038FF] font-bold inline-block pl-1">
                  Login
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
