import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import React from "react";

import {useLoginPage} from "../../libs/FormCmsAdminSdk";
import {LanguageSelectButton} from "../layout/LanguageSelectButton";
import {useLanguage} from "../globalState";
const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
};
export function LoginPage({baseRouter}:{baseRouter:string}) {
    const lan = useLanguage()
    const {error, email,setEmail,password,setPassword, handleLogin,registerLink} = useLoginPage(baseRouter)

    return (
        <div style={containerStyle}>
            <Card title={lan === 'en'?"Login":'登录'} className="p-shadow-5" style={{ width: '300px' }}>
                <div className="p-fluid">
                    {error && (
                        <div className="p-field">
                            <span className="p-error">{error}</span>
                        </div>
                    )}
                    <div className="p-field">
                        <label htmlFor="mail">{lan === 'en' ? 'Email' : '电子邮件'}</label>
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="p-field">&nbsp;</div>
                    <div className="p-field">
                        <label htmlFor="password">{lan === 'en' ? 'Password' : '密码'}</label>
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
                        label={lan === 'en' ? 'Login' : '登录'}
                        icon="pi pi-check"
                        onClick={handleLogin}
                        className="p-mt-2"
                    />
                    <div className="p-field">&nbsp;</div>
                    <div className="p-mt-3">
                        <Link
                            to={registerLink}>{lan === 'en' ? "Don't have an account? Register" : '没有账户？注册'}</Link>
                        <br/>
                        <br/>
                        <LanguageSelectButton/>
                    </div>
                    <br/>
                    <div className="p-mt-3">
                        {lan === 'en' ? 'demo user/password: ' : ' 演示用户名密码: '} admin@cms.com/Admin1!
                    </div>
                </div>


            </Card>
        </div>
    );
}