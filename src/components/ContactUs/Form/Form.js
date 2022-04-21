import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qozhrg7',
      'template_akxu7oa',
      form.current,
      'B2JkePBOzV_nhSmeO',
    );

    toast.success('Your messsage has been sent successfully!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
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
        isSubmitting,
      }) => (
        <div className="flex justify-center p-6 w-3/4 rounded-lg bg-main text-center lg:text-center min-w-min items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:text-center"
            data-testid="valid-form"
          >
            <div className="form-group mb-6">
              <span className="flex justify-start mb-2">Name:</span>
              <input
                type="text"
                name="name"
                id="name"
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
              <span className="flex justify-start mb-2">Email:</span>
              <input
                type="email"
                name="email"
                id="email"
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
              <span className="flex justify-start mb-2">Message:</span>
              <textarea
                name="message"
                id="message"
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
          <ToastContainer />
        </div>
      )}
    </Formik>
  );
}

export default Form;
