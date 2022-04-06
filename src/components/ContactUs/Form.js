import { Formik } from 'formik';

function Form() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = '*Required!';
        }
        if (!values.email) {
          errors.email = '*Required!';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email =
            '*Invalid email address! Please enter your email adress in format: yourname@example.com';
        }
        if (!values.message) {
          errors.message = '*Required!';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="flex justify-center p-6 w-3/4 rounded-lg bg-main text-center lg:text-center min-w-min items-center">
          <form onSubmit={handleSubmit} className="w-full lg:text-center">
            <div className="form-group mb-6">
              <input
                type="text"
                name="name"
                id="exampleInput7"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Your name..."
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
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-left">{errors.name}</div>
              )}
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                name="email"
                id="exampleInput8"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Your e-mail address..."
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
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-left">{errors.email}</div>
              )}
            </div>
            <div className="form-group mb-6">
              <textarea
                name="message"
                id="exampleFormControlTextarea13"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                rows="4"
                placeholder="Your message..."
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
              />
              {errors.message && touched.message && (
                <div className="text-red-500 text-left">{errors.message}</div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
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
      )}
    </Formik>
  );
}

export default Form;