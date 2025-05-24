import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import React from "react";
import {useLoginPage} from "../../../libs/FormCmsAdminSdk";
import {LanguageSelectButton} from "../../layout/LanguageSelectButton";
import {useLanguage} from "../../globalState";

const languageConfig = {
    en: {
        login: "Login",
        usernameOrEmail: "Username or Email",
        password: "Password",
        registerPrompt: "Don't have an account? Register",
        demoCredentials: "Use demo user and password"
    },
    cn: {
        login: "登录",
        usernameOrEmail: "用户名或电子邮件",
        password: "密码",
        registerPrompt: "没有账户？注册",
        demoCredentials: "使用演示用户密码"
    }
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
};

export function LoginPage({baseRouter}: { baseRouter: string }) {
    const lan = useLanguage();
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const {error, usernameOrEmail, setUsernameOrEmail, password, setPassword, handleLogin, registerLink} = useLoginPage(baseRouter);

    return (
        <div style={containerStyle}>
            <Card title={langTexts.login} className="p-shadow-5" style={{width: '300px'}}>
                <div className="p-fluid">
                    {error && (
                        <div className="p-field">
                            <span className="p-error">{error}</span>
                        </div>
                    )}
                    <div className="p-field">
                        <label htmlFor="mail">{langTexts.usernameOrEmail}</label>
                        <InputText
                            id="email"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                        />
                    </div>
                    <div className="p-field"></div>
                    <div className="p-field">
                        <label htmlFor="password">{langTexts.password}</label>
                        <Password
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            feedback={false}
                            toggleMask
                        />
                    </div>
                    <div className="p-field"></div>
                    <Button
                        label={langTexts.login}
                        icon="pi pi-check"
                        onClick={handleLogin}
                        className="p-mt-2"
                    />
                    <div className="p-field"></div>
                    <div className="p-mt-3">
                        <Link to={registerLink}>{langTexts.registerPrompt}</Link>
                    </div>
                    <br/>
                    <LanguageSelectButton/>
                    <br/>
                    <div className="p-mt-3">
                        <Button size={'small'} outlined label={langTexts.demoCredentials} onClick={
                            () => {
                                setUsernameOrEmail('admin@cms.com');
                                setPassword('Admin1!');
                            }
                        }></Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}