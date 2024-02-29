const Header = () => {
    return (
        <div className="absolute w-[100%] z-[-1]" style={{'background' : 'Url(https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/c9fbccf7-aa73-4c4e-a129-0349c8ef655b/PK-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg)', 'height': '100vh', 'background-size': 'cover'}}>
            <div style={{background: 'linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent)'}}>
                <img
                    className="w-44"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
            </div>
        </div>
    )
};

export default Header;