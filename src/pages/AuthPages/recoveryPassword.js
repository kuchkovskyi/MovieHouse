import './auth.css';
import Form from '../../Components/form/form';

const RecoveryPassword = () => {
    return (
        <div className='content'>
            <Form title="Recovery Password" button="Submit"
                firstLinkDescription="Back to login" firstLink={'/signIn'}
                secondLinkDescription="Don't have account? Sign Up!" secondLink={'/registration'}>
                <input className="form-control auth-control"
                    placeholder="Enter your Email: "
                    type={'email'} required/>
                <input className="form-control auth-control"
                    placeholder="Enter new Password: "
                    type={'text'} required/>
                <input className="form-control auth-control"
                    placeholder="Confirm new Password: "
                    type={'text'} required/>
            </Form>
        </div>
    )
}

export {RecoveryPassword};