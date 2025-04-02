import React from 'react';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Link} from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {useLanguage} from "../../globalState";
import {useChangePasswordPage} from "../../../libs/FormCmsAdminSdk";

const languageConfig = {
    en: {
        changePassword: "Change Password",
        password: "Password",
        newPassword: "New Password",
        confirmNewPassword: "Confirm New Password",
        submit: "Submit",
        changePasswordSucceed: "Change Password succeed",
        goToHomePage: "Click here to go to home page",
    },
    cn: {
        changePassword: "更改密码",
        password: "密码",
        newPassword: "新密码",
        confirmNewPassword: "确认新密码",
        submit: "提交",
        changePasswordSucceed: "保存密码成功",
        goToHomePage: "返回首页"
    }
};

export const ChangePasswordPage: React.FC = () => {
    const lan = useLanguage();
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];

    const {
        errors, success,
        oldPassword, setOldPassword,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        handleChangePassword
    } = useChangePasswordPage();

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

    return (
        <div style={containerStyle}>
            <Card title={langTexts.changePassword} className="p-shadow-5" style={cardStyle}>
                <div className="p-fluid">
                    {errors.map(error => (
                        <div className="p-field" key={error}><span className="p-error">{error}</span></div>))}
                    {success ? (
                        <div className="p-field">
                            <span className="p-message ">
                                {langTexts.changePasswordSucceed} <Link to="/">{langTexts.goToHomePage}</Link>
                            </span>
                        </div>
                    ) : (
                        <>
                            <div className="p-field">
                                <label htmlFor="oldPassword">{langTexts.password}</label>
                                <Password
                                    id="username"
                                    value={oldPassword} toggleMask
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="password">{langTexts.newPassword}</label>
                                <Password
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    feedback={false} toggleMask
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="confirmPassword">{langTexts.confirmNewPassword}</label>
                                <Password
                                    id="confirmPassword"
                                    value={confirmPassword} toggleMask
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    feedback={false}
                                />
                            </div>
                            <Button
                                label={langTexts.submit}
                                icon="pi pi-check"
                                onClick={handleChangePassword}
                                className="p-mt-2"
                            />
                        </>)
                    }
                </div>
            </Card>
        </div>
    );
};