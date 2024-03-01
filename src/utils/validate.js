export const validateEmailPassword = (email, password) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!validEmail) return 'email';
    if (!validPassword) return 'pswd';
    return null;
}