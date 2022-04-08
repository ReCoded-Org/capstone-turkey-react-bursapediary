import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SignInForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('*Email is invalid')
          .required('*Email is required'),
        password: Yup.string().required('*Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
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
