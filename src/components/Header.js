import {auth} from "../utils/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, removeUser} from "../utils/userSlice";
import {logo, user_avatar} from "../utils/constant";

const Header = () => {
    const route = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const promise = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                route("/browse");
            } else {
                dispatch(removeUser());
                route("/");
            }
        });
        // promise will be called when component did unmount
        return () => promise;
    }, []);

    const handleSignOut = () => {
        signOut(auth).then( () => {
        }).catch(() => {
            route("/errorPage");
        })
    }

    return (
        <div style={{background: 'linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent)'}} className="absolute w-[100%] z-10">
            <div className="flex justify-between">
                <img
                    className="w-44"
                    src={logo}
                    alt="logo"/>
                {user && (
                    <div>
                    <img
                        src={user_avatar}
                        alt="user_avatar"/>
                    <span className="bg-amber-200 p-2" onClick={handleSignOut}>Sign Out</span>
                </div>
                )}
            </div>
        </div>
    )
};

export default Header;