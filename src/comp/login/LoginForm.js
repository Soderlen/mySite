import React, {useMemo} from 'react';
import { connect } from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import style from "../test/Login.module.css";
import {AuthThunk} from "../../redux/auth-reducer";
import {Redirect, useHistory} from "react-router-dom";
let t=false;

export const Basic_ = ({AuthThunk}) => (
   
    <div>

        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '',toggle:false}}
            validate={values => {
                const errors = {};
                if (!values.password) {
                    errors.password = 'Введи пароль )';
                }else
                    if(values.password.length<5)
                        errors.password = 'пароль должен быть меньше 5 символов';

                if (!values.email) {
                    errors.email = 'Введи емайл )';
                                   } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                //   setTimeout(() => {
                //       alert(JSON.stringify(values, null, 2));
                //        setSubmitting(false);
                //     }, 400);
                setSubmitting(false);
                 let result = AuthThunk(values.email,values.password,values.toggle)



            }}
        >
            {({ isSubmitting }) => (
                <Form  className={style.style_css}>
                    <div>
                        <div>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div>
                            <Field type="checkbox" name="toggle" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>
                </Form>

            )}
        </Formik>


    </div>
);
