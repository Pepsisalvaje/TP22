import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Votación Electrónica Blockchain, IoT</h1>
            <button className="login-button" onClick = {props.connectWallet}>Logearse</button>
        </div>
    )
}

export default Login;