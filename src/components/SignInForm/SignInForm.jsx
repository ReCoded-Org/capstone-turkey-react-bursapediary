import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { HOME_ROUTE } from '../../routes';
import { login } from '../../features/user/userAPI';

function SignInForm() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate(HOME_ROUTE);
    }
  }, [currentUser, navigate]);
  return (
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        login(dispatch, values);
        setSubmitting(false);
      }}
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('*Username is required'),
        password: Yup.string().required('*Password is required'),
      })}
    >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
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
                  data-testid="usernameError"
                  name="username"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-1 pb-4">
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
                  data-testid="usernameError"
                  name="password"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-2 flex justify-center sm:block">
              <button
                className="w-full h-8 sm:w-fit bg-[#6A2C70] hover:bg-[#803886] items-center text-white text-sm py-1 px-12 sm:px-7 font-semibold rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
