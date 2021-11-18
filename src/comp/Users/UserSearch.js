import React from 'react';
import { Formik } from 'formik';


const UserSearch = (props) => (
    <div>

        <h1>User Sersch Form  </h1>
        <Formik

            initialValues={{  term: props.term }}
            validate={values => {

            }}
            onSubmit={(values, { setSubmitting }) => {
                props.getUsers(1,props.pagesize,values.term)
                setSubmitting(false);
                }
            }
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
                <form onSubmit={handleSubmit}>
                                      {errors.email && touched.email && errors.email}
                    <input
                        type="text"
                        name="term"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.term}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                       Sersch
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default UserSearch;