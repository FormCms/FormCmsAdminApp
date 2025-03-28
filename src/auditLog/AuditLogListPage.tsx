import {useAuditLogListPage} from "../../libs/FormCmsAdminSdk/auditLog/pages/useAuditLogListPage";
import {XEntity} from "../../libs/FormCmsAdminSdk/cms/types/xEntity";

export function AuditLogListPage(
    {
        baseRouter, schema
    }:
    {
        baseRouter: string,
        schema: XEntity
    }
) {
    const {AuditLogListPageMain} = useAuditLogListPage(baseRouter, schema);
    return <>
        <AuditLogListPageMain/>
    </>
}