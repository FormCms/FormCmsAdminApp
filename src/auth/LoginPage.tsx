import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import React from "react";

import {useLoginPage} from "../../libs/FormCmsAdminSdk/auth/pages/useLoginPage";

export function LoginPage({baseRouter}:{baseRouter:string}) {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    };

    const {error, email,setEmail,password,setPassword, handleLogin,registerLink} = useLoginPage(baseRouter)
    return (
        <div style={containerStyle}>
            <Card title="Login" className="p-shadow-5" style={{ width: '300px' }}>
                <div className="p-fluid">
                    {error && (
                        <div className="p-field">
                            <span className="p-error">{error}</span>
                        </div>
                    )}
                    <div className="p-field">
                        <label htmlFor="mail">Email</label>
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="p-field">&nbsp;</div>
                    <div className="p-field">
                        <label htmlFor="password">Password</label>
                        <Password
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            feedback={false}
                            toggleMask
                        />
                    </div>
                    <div className="p-field">&nbsp;</div>
                    <Button
                        label="Login"
                        icon="pi pi-check"
                        onClick={handleLogin}
                        className="p-mt-2"
                    />
                    <div className="p-field">&nbsp;</div>
                    <div className="p-mt-3">
                        <Link to={registerLink}>Don't have an account? Register</Link>
                    </div>
                </div>
            </Card>
        </div>
    );
}