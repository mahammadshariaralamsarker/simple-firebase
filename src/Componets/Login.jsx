
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import app from '../firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn=()=>{
        console.log("Google mama is coming ");
    }

    return (
        <div>
            <button onClick={handleGoogleSingIn}>Google Login</button>
        </div>
    );
};

export default Login;