import React from 'react';
import '../../styles/basic-form.scss';

const LoginForm = ({ loginForm, updateLoginForm, login }) => {

    const onChange = (field, value) => updateLoginForm({ [field]: value });

    const onSubmit = () => login(loginForm);


    return (
        <div className="login-form basic-form">
            <h2>Logowanie</h2>
            <input type="email" placeholder="Email" value={loginForm.email} onChange={({ target }) => onChange('email', target.value)} />
            <input type="password" placeholder="Hasło" value={loginForm.password} onChange={({ target }) => onChange('password', target.value)} />
            <button onClick={onSubmit}>Zaloguj się</button>
        </div>
    );

};

export default LoginForm;
