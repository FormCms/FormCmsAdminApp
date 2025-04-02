import 'primereact/resources/themes/lara-light-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './App.css';
import React from "react";
import {configs} from "./config";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import {LoginPage} from "./pages/auth/LoginPage";
import {RegisterPage} from "./pages/auth/RegisterPage";
import {SidebarLayout} from "./layout/sidebar/SideBarLayout";
import {GlobalStateKeys, useGlobalState} from "./globalState";
import {TopBarLayout} from "./layout/topbar/TopBarLayout";
import {
    AuthRouter,
    setAuditLogBaseUrl,
    setAuthApiBaseUrl,
    setCmsApiBaseUrl,
    useUserInfo
} from "../libs/FormCmsAdminSdk";

axios.defaults.withCredentials = true
setCmsApiBaseUrl(configs.apiURL)
setAuditLogBaseUrl(configs.apiURL)
setAuthApiBaseUrl(configs.apiURL)

function App() {
    const {data} = useUserInfo();
    const [layout, _] = useGlobalState<string>(GlobalStateKeys.Layout, 'sidebar');
    const AuthRouterComponent = () => (
        <AuthRouter
            baseRouter={configs.authRouterPrefix}
            LoginPage={LoginPage}
            RegisterPage={RegisterPage}
        />
    );

    return data
        ? (layout === 'sidebar' ? <SidebarLayout/> : <TopBarLayout/>)
        : <Routes>
            <Route path={`${configs.authRouterPrefix}/*`} element={<AuthRouterComponent/>}/>
            <Route path="*" element={<AuthRouterComponent/>}/>
        </Routes>
}

export default App;