import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddProjectForm() {
  return (
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
      initialValues={{
        title: '',
        description: '',
        amount: '',
        category: '',
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required('*Title is required'),
        description: Yup.string().required('*Description is required'),
        amount: Yup.number('Amount must be number').required(
          '*Amount is required',
        ),
        category: Yup.string().required('*Category is required'),
      })}
    >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-2"
                htmlFor="title"
              >
                Title
                <input
                  className="leading-tight border-1 shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 outline outline-1 focus:shadow-outline"
                  id="title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-2"
                htmlFor="description"
              >
                Description
                <input
                  className="leading-tight border-1 shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 outline outline-1 focus:shadow-outline"
                  id="description"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-4"
                htmlFor="amount"
              >
                Amount
                <input
                  className="leading-tight shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline outline-1  focus:shadow-outline"
                  id="amount"
                  type="number"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-1 pb-4">
              <label
                className="block text-[#6A2C70] text-md font-bold mb-4"
                htmlFor="category"
              >
                Category
                <input
                  className="leading-tight shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline outline-1  focus:shadow-outline"
                  id="category"
                  type="text"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-xs italic absolute"
                />
              </label>
            </div>
            <div className="mb-2 flex justify-center sm:block">
              <button
                className="w-full h-8  bg-[#6A2C70] hover:bg-[#803886] items-center text-white text-sm py-1 px-12  font-semibold rounded focus:outline-none focus:shadow-outline"
                type="submit"
                data-bs-dismiss="modal"
                disabled={isSubmitting}
              >
                Add New Project
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default AddProjectForm;
