import {Route, Routes} from "react-router-dom";
import {configs} from "../config";
import {DataListPage} from "../pages/cms/DataListPage";
import {NewDataItemPage} from "../pages/cms/NewDataItemPage";
import {DataItemPage} from "../pages/cms/DataItemPage";
import {TaskListPage} from "../pages/cms/TaskListPage";
import {AssetListPage} from "../pages/cms/AssetListPage";
import {AssetEditPage} from "../pages/cms/AssetEditPage";
import {UserListPage} from "../pages/auth/UserListPage";
import {UserDetailPage} from "../pages/auth/UserDetailPage";
import {ChangePasswordPage} from "../pages/profile/ChangePasswordPage";
import {RoleListPage} from "../pages/auth/RoleListPage";
import {RoleDetailPage} from "../pages/auth/RoleDetailPage";
import {AuditLogDetailPage} from "../pages/auditLog/AuditLogDetailPage";
import {AuditLogListPage} from "../pages/auditLog/AuditLogListPage";
import React from "react";
import {AccountRouter, AuditLogRouter, EntityRouter, ProfileRouter} from "../../libs/FormCmsAdminSdk";
import {DashboardPage} from "../pages/dashboard/DashboardPage";
import {SetAvatarPage} from "../pages/profile/SetAvatarPage";

export function AppRouters() {
    return <Routes>
        <Route path={`${configs.routerPrefix}/entities/*`} element={
            <EntityRouter
                baseRouter={configs.routerPrefix + "/entities"}
                DataListPage={DataListPage}
                NewDataItemPage={NewDataItemPage}
                DataItemPage={DataItemPage}
                TaskListPage={TaskListPage}
                AssetListPage={AssetListPage}
                AssetEditPage={AssetEditPage}
                DashboardPage={DashboardPage}
            />
        }/>
        <Route path={`${configs.routerPrefix}/auth/*`} element={
            <AccountRouter
                baseRouter={configs.routerPrefix + "/auth"}
                UserListPage={UserListPage}
                UserDetailPage={UserDetailPage}
                RoleListPage={RoleListPage}
                RoleDetailPage={RoleDetailPage}
            />
        }/>
        <Route path={`${configs.routerPrefix}/profile/*`} element={
            <ProfileRouter baseRouter={`${configs.routerPrefix}/profile/*`} ChangePasswordPage={ChangePasswordPage} SetAvatarPage={SetAvatarPage}/>
        }/>
        <Route path={`${configs.routerPrefix}/audit/*`} element={
            <AuditLogRouter
                baseRouter={configs.routerPrefix + "/audit"}
                AuditLogDetailPage={AuditLogDetailPage}
                AuditLogListPage={AuditLogListPage}
            />
        }/>
        <Route path={configs.routerPrefix} element={ <DashboardPage/>}/>
    </Routes>
}