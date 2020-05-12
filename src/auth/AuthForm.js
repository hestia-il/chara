import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {connect} from "react-redux";
import {login, register} from "./actions";
import {getAuthData} from "./selectors";
import restApi from "./restApi";
import {Spinner} from "react-bootstrap";
//
//
// https://hackernoon.com/building-react-forms-with-formik-yup-and-react-bootstrap-with-a-minimal-amount-of-pain-and-suffering-1sfk3xv8
//
//
function AuthForm({dispatch, history, location, authMode, loggedIn}) {

    console.log("AuthForm", authMode, loggedIn);
    console.log("AuthForm: location.state", location.state?.from);

    // if (loggedIn) {
    //     console.log("AuthForm loggedIn is true - history.goBack()");
    //     history.goBack();
    // }

    const submitButtonText = authMode === 'register' ? 'register' : 'login';

    const validationSchema = {
        password: Yup.string()
            .required('password Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('email Required'),
    };

    const initialValues = {
        email: '',
        password: ''
    };

    if (authMode === 'register') {
        validationSchema.username = Yup.string()
            .required('username Required');

        initialValues.username = '';
    }

    const yupValidationSchema = Yup.object().shape(validationSchema);

    const handleSubmit = async (values, actions) => {

        const redirectToAfterSuccess = location.state?.from.pathname || '/';
        console.log("handleSubmit", values, actions);

        actions.setSubmitting(true);

        if (authMode === 'register') {
            //
            // register request
            //
            let result = await restApi.register(values);
            actions.setSubmitting(false);
            if (result.error) {
                actions.setFieldError('general', result.error.message);
            } else {
                dispatch(register(result));
                // history.goBack();
                history.push(redirectToAfterSuccess);
            }
        } else {
            //
            // login request
            //
            let result = await restApi.login(values);
            actions.setSubmitting(false);
            if (result.error) {
                actions.setFieldError('general', result.error.message);
            } else {
                dispatch(login(result));
                // history.goBack();
                history.push(redirectToAfterSuccess);
            }
        }
    };

    return (

        <Formik initialValues={initialValues}
                validationSchema={yupValidationSchema}
                onSubmit={handleSubmit}>

            {({errors, touched, isSubmitting}) => (

                <Form noValidate>
                    {authMode === 'register' &&
                    <div className="form-group">
                        <label htmlFor={"username"}>username</label>
                        <Field name={"username"} className="form-control"/>
                        <ErrorMessage name={"username"} component="div" className="text-danger"/>
                    </div>
                    }

                    <div className="form-group">
                        <label htmlFor={"email"}>email</label>
                        <Field name={"email"} type={"email"} className="form-control"/>
                        <ErrorMessage name={"email"} component="div" className="text-danger"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor={"password"}>password</label>
                        <Field name={"password"} type={"password"} className="form-control"/>
                        <ErrorMessage name={"password"} component="div" className="text-danger"/>
                    </div>

                    {errors.general && <div className="form-group">
                        <div className="text-danger">{errors.general}</div>
                    </div>}

                    <div className="form-group">
                        <button type="submit" disabled={isSubmitting}
                                className="btn btn-primary">{isSubmitting && <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />}{submitButtonText}</button>
                    </div>

                </Form>
            )}
        </Formik>

    )
}

function mapStateToProps(state) {
    return {
        ...getAuthData(state)
    }
}

export default connect(mapStateToProps)(AuthForm);