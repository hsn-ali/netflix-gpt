import Header from "./Header";
import {useRef, useState} from "react";
import {validateEmailPassword} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const [validation, setValidation] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignIn = () => {
        setSignIn(!signIn);
    }

    const validate = () => {
        setValidation(validateEmailPassword(email.current.value, password.current.value));
        if (validation) return
        if (!signIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(credential => {
                    setErrorMessage(null);
                })
                .catch((err) => {
                    setErrorMessage(err.code + err.message);
                })
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(credential => {
                    setErrorMessage(null);
                })
                .catch((err) => {
                    setErrorMessage(err.message.includes('auth/invalid-credential') ? 'Sorry, we cannot find a User with these credentials' : '');
                })
        }
    }

    const email = useRef();
    const password = useRef();

    return (
        <div>
            <Header />
            <div className="absolute w-[100%] z-[-1]" style={{'background' : 'Url(https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/c9fbccf7-aa73-4c4e-a129-0349c8ef655b/PK-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg)', 'height': '100vh', 'background-size': 'cover'}}>
        </div>
            <form onSubmit={event => {event.preventDefault()}} className="flex justify-center items-center h-[100vh] shadow-xl">
                <div className="flex flex-col h-[660px] w-[475px]" style={{'border-radius': '4px', background: 'rgb(0, 0, 0, .75)', padding: '60px 68px 40px'}}>
                    <h1 className='text-white p-2 m-2 mb-5 text-center font-bold text-3xl'>{signIn ? 'Sign In' : 'Sign Up'}</h1>
                    {
                        !signIn && (
                            <input className='p-2 m-2 mb-5 custom-inp' type="text" placeholder='Full Name'/>
                        )
                    }
                    <input ref={email} type="email" placeholder="Email Adress" onBlur={validate} className="p-2 m-2 custom-inp mb-5"/>
                    { (validation === 'email') && (<span className='text-[#e87c03] pb-2 mb-2 pl-2'>Invalid Email</span>)}
                    <input ref={password} type="password" placeholder="Password" className="p-2 m-2 custom-inp mb-5"/>
                    { (validation === 'pswd') && (<span className='text-[#e87c03] pb-2 mb-2 pl-2'>Password must contains Upper case and Lower case</span>)}
                    <button className="bg-red-600 text-white font-bold p-4 m-2" onClick={validate}>{signIn ? 'Sign In' : 'Sign Up'}</button>

                    {errorMessage && (<span className='text-white text-sm bg-[#e87c0396] p-3 m-2 rounded'>{errorMessage}</span>)}
                    <div className='text-[#b3b3b3] flex justify-between p-2 m-2'>
                        <div>
                            <input type="checkbox"/>
                            <span className='ml-2'>Remember me</span>
                        </div>
                        <span>Need Help ?</span>
                    </div>
                    <div className='text-white p-2 m-2'>
                        <span>{signIn ? 'New to Netflix' : 'Already a user '} ? <span className='sign' onClick={toggleSignIn}>{signIn ? 'Sign Up Now' : 'Sign In'}</span></span>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Login;