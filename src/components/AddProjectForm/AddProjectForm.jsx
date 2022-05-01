import axios from 'axios';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

function AddProjectForm() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        const project = {
          title: values.title,
          description: values.description,
          amount: values.amount,
          owners: [currentUser.id],
          categories: [values.category],
        };
        axios.post('https://bursapediary.com/projects', project, {
          headers: {
            authorization: currentUser.token,
          },
        });

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
                  value={values.description}
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
                  value={values.amount}
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
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding bg-no-repeat border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                  value={values.category}
                >
                  <option value="Cars">Cars</option>
                  <option value="Education">Education</option>
                  <option value="Social">Social</option>
                  <option value="Tech">Tech</option>
                  <option value="Tech">Stack</option>
                </select>
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
