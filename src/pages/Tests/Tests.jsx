import React, { useState } from 'react';
import { useFormik } from 'formik';

const Test = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
