import Header from "./Header";
import {useState} from "react";

const Login = () => {
    const [signIn, setSignIn] = useState(true);

    const toggleSignIn = () => {
        setSignIn(!signIn);
    }

    return (
        <div>
            <Header />
            <div>
                {/*<img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/c9fbccf7-aa73-4c4e-a129-0349c8ef655b/PK-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-bg"/>*/}
            </div>
            <form className="flex justify-center items-center h-[100vh] shadow-xl">
                <div className="flex flex-col h-[660px] w-[475px]" style={{'border-radius': '4px', background: 'rgb(0, 0, 0, .75)', padding: '60px 68px 40px'}}>
                    <h1 className='text-white p-2 m-2 mb-5 text-center font-bold text-3xl'>{signIn ? 'Sign In' : 'Sign Up'}</h1>
                    {
                        !signIn && (
                            <input className='p-2 m-2 mb-5 custom-inp' type="text" placeholder='Full Name'/>
                        )
                    }
                    <input type="email" placeholder="Email Adress" className="p-2 m-2 custom-inp mb-5"/>
                    <input type="password" placeholder="Password" className="p-2 m-2 custom-inp mb-5"/>
                    <button className="bg-red-600 text-white font-bold p-4 m-4">{signIn ? 'Sign In' : 'Sign Up'}</button>
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