import {useAuditLogListPage,XEntity} from "../../../libs/FormCmsAdminSdk"
import {getDefaultComponentConfig} from "../../types/comoponentConfig";

export function AuditLogListPage(
    {
        baseRouter, schema
    }:
    {
        baseRouter: string,
        schema: XEntity
    }
) {
    const {AuditLogListPageMain} = useAuditLogListPage(getDefaultComponentConfig(),baseRouter, schema);
    return <>
        <AuditLogListPageMain/>
    </>
}