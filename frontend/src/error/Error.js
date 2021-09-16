import React from 'react';
import { ERROR_MESSAGES } from "../consts";

import './error.scss';

const Error = ({ error }) => (
    <div className="error-message">
        {Array.isArray(error) ? error.map(errorCode => <div>{ERROR_MESSAGES[errorCode]}</div>) : ERROR_MESSAGES[error]}
    </div>
);

export default Error;
