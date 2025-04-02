import React from "react";
import {Card} from "primereact/card";
import {Link} from "react-router-dom";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {RegisterPageConfig, useRegisterPage} from "../../../libs/FormCmsAdminSdk";
import {LanguageSelectButton} from "../../layout/LanguageSelectButton";
import {useLanguage} from "../../globalState";

const languageConfig = {
    en: {
        register: "Register",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        registrationSucceeded: "Registration succeeded. ",
        clickToLogin: "Click here to go to login",
        loginPrompt: "Already have an account? Login"
    },
    cn: {
        register: "注册",
        email: "电子邮件",
        password: "密码",
        confirmPassword: "确认密码",
        registrationSucceeded: "注册成功",
        clickToLogin: "点击这里登录",
        loginPrompt: "已经有用户名，点此登录"
    }
};

export const cnPageConfig: RegisterPageConfig = {
    passwordMismatchError: "密码不匹配",
    registerFailedError: "注册失败"
};

export function RegisterPage({baseRouter}: { baseRouter:string; }) {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    };

    const cardStyle: React.CSSProperties = {
        width: '300px',
    };

    const lan = useLanguage();
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const {errors, success, loginLink,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        handleRegister
    } = useRegisterPage(
        baseRouter,
        lan === 'en' ? undefined : cnPageConfig,
    );

    return (
        <div style={containerStyle}>
            <Card title={langTexts.register} className="p-shadow-5" style={cardStyle}>
                <div className="p-fluid">
                    {errors.map(error => (<div className="p-field"> <span className="p-error">{error}</span> </div>))}
                    {success ? (
                        <div className="p-field">
                            <span className="p-message ">
                                {langTexts.registrationSucceeded}
                                <Link to={loginLink}>{langTexts.clickToLogin}</Link>
                            </span>
                        </div>
                    ) : (
                        <>
                            <div className="p-field">
                                <label htmlFor="username">{langTexts.email}</label>
                                <InputText
                                    id="username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="password">{langTexts.password}</label>
                                <Password toggleMask
                                          id="password"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          feedback={false}
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="confirmPassword">{langTexts.confirmPassword}</label>
                                <Password toggleMask
                                          id="confirmPassword"
                                          value={confirmPassword}
                                          onChange={(e) => setConfirmPassword(e.target.value)}
                                          feedback={false}
                                />
                            </div>
                            <Button
                                label={langTexts.register}
                                icon="pi pi-check"
                                onClick={handleRegister}
                                className="p-mt-2"
                            />
                            <div className="p-mt-3">
                                <Link to={loginLink}>{langTexts.loginPrompt}</Link>
                                <LanguageSelectButton/>
                            </div>
                        </>
                    )}
                </div>
            </Card>
        </div>
    );
}