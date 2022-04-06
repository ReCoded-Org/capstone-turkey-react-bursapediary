import { Formik } from 'formik';
import * as Yup from 'yup';

function SignInForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-2"
                htmlFor="email"
              >
                Email
                <input
                  className="border-1 shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 outline outline-1 focus:shadow-outline"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs italic">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="mb-1">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-1"
                htmlFor="password"
              >
                Password
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline outline-1  focus:shadow-outline"
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.password && touched.password && (
                <div className="text-red-500 text-xs italic">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="mb-8">
              <a
                className="inline-block align-baseline text-sm hover:text-blue-800"
                href="a.html"
              >
                Forgot your Password?
              </a>
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
