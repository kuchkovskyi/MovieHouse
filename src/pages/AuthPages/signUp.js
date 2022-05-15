import './auth.css';
import Form from './../../Components/form/form';

const SignUp = () => {
    return (
        <div className='content'>
            <Form title="Registration" button="Sign Up"
                firstLinkDescription="" firstLink={'/'}
                secondLinkDescription="Already have an account? Sign In!" secondLink={'/signIn'}>
                <input className="form-control auth-control"
                    placeholder="Enter your Email: "
                    type={'email'}
                    required/>
                <input className="form-control auth-control"
                    placeholder="Enter your Password: "
                    type={'password'}
                    required/>
                <input className="form-control auth-control"
                    placeholder="Confirm your Password: "
                    type={'password'}
                    required/>
            </Form>
        </div>
    )
}

export { SignUp };