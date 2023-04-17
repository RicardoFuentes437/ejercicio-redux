import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
    password: Yup.string()
    .min(1, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required')
});

const LoginForm = ({logged, onLogin, fetching}) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <Formik
        initialValues={initialCredentials}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
            onLogin(values.email, values.password)
        }}
        >
            {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                <Form>
                <label htmlFor="email">email</label>
                <Field id="email" type="text" name="email" className="input" placeholder="Nombre de la tarea"/>
                { errors.email && touched.email &&
                    (
                    <ErrorMessage name="email" component='div'></ErrorMessage>
                    )
                }
                <label htmlFor="password">password</label>
                <Field id="password" type="password" name="password" className="input" placeholder="Descripcion de tarea"/>
                { errors.password && touched.password &&
                    (
                    <ErrorMessage name="password" component='div'></ErrorMessage>
                    )
                }
                <button type="submit">Submit</button>
                {fetching ? (<p>LOADING...</p>) : null}
                {isSubmitting ? <p>Your form is submitting...</p> : null}
                </Form>
            )}
        </Formik>
    );
};


LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
};


export default LoginForm;
