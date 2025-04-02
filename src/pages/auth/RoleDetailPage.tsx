import {Button} from "primereact/button";
import {useRoleDetailPage, RoleDetailPageConfig} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {useLanguage} from "../../globalState";
import {cnComponentConfig} from "../../types/cnComponentConfig";

const languageConfig = {
    en: {
        creatingNewRole: "Creating New Role",
        editingRole: "Editing Role",
        saveRole: "Save Role",
        deleteRole: "Delete Role"
    },
    cn: {
        creatingNewRole: "新建角色",
        editingRole: "编辑角色",
        saveRole: "保存角色",
        deleteRole: "删除角色"
    }
};

const cnPageConfig: RoleDetailPageConfig = {
    deleteConfirmHeader: "确认",
    deleteConfirmationMessage: "您确认删除吗",
    deleteSuccessMessage: "删除成功",
    nameIsRequiredMessage: "请输入角色名称",
    nameLabel: "角色名称",
    saveSuccessMessage: "保存成功"
};

export function RoleDetailPage({baseRouter}: { baseRouter: string }) {
    const lan = useLanguage();
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const {
        isNewRole,
        roleData,
        formId,
        handleDelete,
        RoleDetailPageMain
    } = useRoleDetailPage(
        lan === 'en' ? getDefaultComponentConfig() : cnComponentConfig,
        baseRouter,
        lan === 'en' ? undefined : cnPageConfig
    );

    return (
        <>
            {isNewRole ?
                <h3>{langTexts.creatingNewRole}</h3> :
                <h3>{langTexts.editingRole} `{roleData?.name}`</h3>
            }
            <Button type="submit" form={formId} label={langTexts.saveRole} icon="pi pi-check"/>
            {' '}
            <Button type="button" label={langTexts.deleteRole} severity="danger" onClick={handleDelete}/>
            <br/>
            <br/>
            <RoleDetailPageMain/>
        </>
    );
}