import {Route, Routes} from "react-router-dom";
import {configs} from "./config";
import {DataListPage} from "./cms/DataListPage";
import {NewDataItemPage} from "./cms/NewDataItemPage";
import {DataItemPage} from "./cms/DataItemPage";
import {TaskListPage} from "./cms/TaskListPage";
import {AssetListPage} from "./cms/AssetListPage";
import {AssetEditPage} from "./cms/AssetEditPage";
import {UserListPage} from "./auth/UserListPage";
import {UserDetailPage} from "./auth/UserDetailPage";
import {ChangePasswordPage} from "./auth/ChangePasswordPage";
import {RoleListPage} from "./auth/RoleListPage";
import {RoleDetailPage} from "./auth/RoleDetailPage";
import {AuditLogDetailPage} from "./auditLog/AuditLogDetailPage";
import {AuditLogListPage} from "./auditLog/AuditLogListPage";
import React from "react";
import {EntityRouter} from "../libs/FormCmsAdminSdk/cms/EntityRouter";
import {AccountRouter} from "../libs/FormCmsAdminSdk/auth/AccountRouter";
import {AuditLogRouter} from "../libs/FormCmsAdminSdk/auditLog/AuditLogRouter";

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