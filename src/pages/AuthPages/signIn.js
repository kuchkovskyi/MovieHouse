import Form from "../../Components/form/form";
import './auth.css';

const SignIn = () => {

    return (
        <div className="content">
            <Form title="Sign In" button="Sign In"
                firstLinkDescription="Forgot Password?" firstLink={'/recoveryPassword'}
                secondLinkDescription="Dont' have account? Sign Up!" secondLink={'/registration'}>
                <input className="form-control auth-control"
                    placeholder="Enter your Email: "
                    type={'email'}
                    required/>
                <input className="form-control auth-control"
                    placeholder="Enter your Password: "
                    type={'password'}
                    required/>
            </Form>
        </div>
    )
}

export { SignIn };