import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {reduxForm, Field, WrappedFieldProps, InjectedFormProps} from "redux-form";
import {Link} from 'react-router-dom'
//import styles from '../Auth.module.css'

// export interface IFormProps {
//     username: string;
//     password: string;
// }


const InputForm: React.FC<WrappedFieldProps & ITextFieldProps> = ({input, meta, ...props}) => {
    console.log(input);
    console.log(props);


    return (
        <Input {...input} {...props}>

        </Input>
    )
}

interface ILogInFormProps {
    login: string
}

interface ITextFieldProps {
    type: string,
    placeholder: string
}


export const AuthForm: React.FC<InjectedFormProps & ILogInFormProps & any> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <FormControl>
                    <InputLabel htmlFor="input-login">Login</InputLabel>
                    <Field component={InputForm} type={'text'} name={'login'}/>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="input-password">Password</InputLabel>
                    <Field component={InputForm} type={'text'} name={'password'}/>
                </FormControl>
            </div>

            <Link to='/main'>
                <Button
                    // className={styles.authBtn}
                    variant="contained"
                    color="secondary">
                    Log In
                </Button>
            </Link>

        </form>
    );
};

const Auth = (props: any) => {
    const login = () => {
        alert('Logged in')
    }
    return (
        <div className="">
            <ReduxAuthForm onSubmit={login} login='sad'/>
        </div>
    );
}

const ReduxAuthForm = reduxForm<InjectedFormProps, ILogInFormProps>({form: 'auth'})(AuthForm)

export default Auth;