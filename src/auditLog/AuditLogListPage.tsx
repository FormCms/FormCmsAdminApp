import {useAuditLogListPage,XEntity} from "../../libs/FormCmsAdminSdk"

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