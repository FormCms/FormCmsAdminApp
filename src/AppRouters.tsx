import {Route, Routes} from "react-router-dom";
import {configs} from "./config";
import {DataListPage} from "./pages/cms/DataListPage";
import {NewDataItemPage} from "./pages/cms/NewDataItemPage";
import {DataItemPage} from "./pages/cms/DataItemPage";
import {TaskListPage} from "./pages/cms/TaskListPage";
import {AssetListPage} from "./pages/cms/AssetListPage";
import {AssetEditPage} from "./pages/cms/AssetEditPage";
import {UserListPage} from "./pages/auth/UserListPage";
import {UserDetailPage} from "./pages/auth/UserDetailPage";
import {ChangePasswordPage} from "./pages/auth/ChangePasswordPage";
import {RoleListPage} from "./pages/auth/RoleListPage";
import {RoleDetailPage} from "./pages/auth/RoleDetailPage";
import {AuditLogDetailPage} from "./pages/auditLog/AuditLogDetailPage";
import {AuditLogListPage} from "./pages/auditLog/AuditLogListPage";
import React from "react";
import {AccountRouter, AuditLogRouter, EntityRouter} from "../libs/FormCmsAdminSdk";

export function AppRouters() {
    return <Routes>
        <Route path={`${configs.entityRouterPrefix}/*`} element={
            <EntityRouter
                baseRouter={configs.entityRouterPrefix}
                DataListPage={DataListPage}
                NewDataItemPage={NewDataItemPage}
                DataItemPage={DataItemPage}
                TaskListPage={TaskListPage}
                AssetListPage={AssetListPage}
                AssetEditPage={AssetEditPage}
            />
        }/>
        <Route path={`${configs.authRouterPrefix}/*`} element={
            <AccountRouter
                baseRouter={configs.authRouterPrefix}
                UserListPage={UserListPage}
                UserDetailPage={UserDetailPage}
                ChangePasswordPage={ChangePasswordPage}
                RoleListPage={RoleListPage}
                RoleDetailPage={RoleDetailPage}
            />
        }/>
        <Route path={`${configs.auditLogRouterPrefix}/*`} element={
            <AuditLogRouter
                baseRouter={configs.auditLogRouterPrefix}
                AuditLogDetailPage={AuditLogDetailPage}
                AuditLogListPage={AuditLogListPage}
            />
        }/>
    </Routes>
}