import React from 'react';
import Error from "../../error/Error";

import '../../styles/basic-form.scss'

const RegisterForm = ({ registerForm, updateRegisterForm, register }) => {

    const onChange = (field, value) => updateRegisterForm({ [field]: value });

    const onSubmit = () => register(registerForm);

    return (
        <div className="basic-form register-form">
            {registerForm.error && <Error error={registerForm.error}/>}
            <h2> Rejestracja </h2>
            <input placeholder="Imię" type="text" onChange={({ target }) => onChange('name', target.value)}/>
            <input placeholder="Nazwisko" type="text" onChange={({ target }) => onChange('surname', target.value)}/>
            <input placeholder="Email" type="email" onChange={({ target }) => onChange('email', target.value)}/>
            <input placeholder="Hasło" type="password" onChange={({ target }) => onChange('password', target.value)}/>
            <button onClick={onSubmit}>Utwórz konto</button>
        </div>
    )
};

export default RegisterForm;
