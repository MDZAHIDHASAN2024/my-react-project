import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Tests = () => {
  // use formik here
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },

    // use yup here
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, 'Name have must atleast 2 charachers')
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, 'Name have must atleast 6 charachers')
        .required(),
    }),
  });

  // formik error handle here
  const renderNameError = formik.touched.name && formik.errors.name && (
    <span>{formik.errors.name}</span>
  );
  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password &&
    formik.errors.password && <span>{formik.errors.password}</span>;

  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="text-danger">{renderNameError}</div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="text-danger">{renderEmailError}</div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="text-danger">{renderPasswordError}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Tests;
