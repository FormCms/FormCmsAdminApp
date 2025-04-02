import {AuditLogListPageConfig, useAuditLogListPage, XEntity} from "../../../libs/FormCmsAdminSdk"
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {GlobalStateKeys, useGlobalState, useLanguage} from "../../globalState";
import {cnComponentConfig} from "../../types/cnComponentConfig";
const cnPageConfig: AuditLogListPageConfig = {
    auditLogLabels: {
        id:'编号',
        userName:'用户名',
        action:'操作类型',
        createdAt:'创建时间',
        entityName:'实体名',
        payload :'内容',
        recordLabel:'记录标题',
        userId:'用户' ,
        recordId:'记录编号'
    }
}


const languageConfig = {
    en: {
        header:'Audit Log',
    },
    cn: {
        header:'系统日志'
    }
};

export function AuditLogListPage(
    {
        baseRouter, schema
    }:
    {
        baseRouter: string,
        schema: XEntity
    }
) {
    const lan = useLanguage();
    const {AuditLogListPageMain} = useAuditLogListPage(
        lan == 'en' ?getDefaultComponentConfig(): cnComponentConfig,
        baseRouter,
        schema,
        lan == 'en' ? undefined: cnPageConfig
    );

    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    setHeader(langTexts.header);
    return <>
        <AuditLogListPageMain/>
    </>
}