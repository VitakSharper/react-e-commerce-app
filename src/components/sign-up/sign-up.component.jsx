import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {connect} from 'react-redux';
import {signUpStart} from "../../redux/user/user.actions";

const SignUp = ({signUp}) => {
    const [signUpData, setSignUpData] = useState({displayName: '', email: '', password: '', confirmPassword: ''});
    const {displayName, email, password, confirmPassword} = signUpData;

    const handleSubmit = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        signUp({displayName, email, password});
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setSignUpData({...signUpData, [name]: value})
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>
                I do not have a account
            </h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    signUp: (newUserData) => dispatch(signUpStart(newUserData))
});

export default connect(null, mapDispatchToProps)(SignUp);
