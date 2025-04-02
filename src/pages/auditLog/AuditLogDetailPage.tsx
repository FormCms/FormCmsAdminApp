import {Button} from "primereact/button";
import {useAuditLogDetailPage} from "../../../libs/FormCmsAdminSdk";
import {useLanguage} from "../../globalState";

const languageConfig = {
    en: {
        back: "Back",
        byUser: "By User:",
        at: "At"
    },
    cn: {
        back: "返回",
        byUser: "用户：",
        at: "时间："
    }
};

export function AuditLogDetailPage({baseRouter}:{baseRouter:string}) {
    const lan = useLanguage();
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const {auditLogData, refUrl} = useAuditLogDetailPage(baseRouter)

    return (
        <>
            <Button type="button" label={langTexts.back} onClick={() => window.location.href = refUrl} />
            {auditLogData && (
                <div className="surface-section">
                    <div className="font-medium text-3xl text-900 mb-3">
                        [{auditLogData.action} {auditLogData.entityName}] {auditLogData.recordId} - {auditLogData.recordLabel}
                    </div>
                    <div className="text-500 mb-5">
                        <b>{langTexts.byUser}</b>{auditLogData.userName}({auditLogData.userId})
                        <b>{langTexts.at}</b> {auditLogData.createdAt.toString()}
                    </div>
                    <ul className="list-none p-0 m-0">
                        {Object.entries(auditLogData.payload).map(([k,v]) => (
                            <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">{k}</div>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{v}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}