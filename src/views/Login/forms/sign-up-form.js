import React from 'react';

function SignUpForm() {

    /**
     *
     * validationSchema: Yup.object({
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
     *
     */

    return (
        <>
            <h2 className="text-center my-2">Inscription </h2>
        </>
    );
}

export default SignUpForm;
