import {Button} from "primereact/button";
import {useRoleDetailPage, RoleDetailPageConfig} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {GlobalStateKeys, useGlobalState, useLanguage} from "../../globalState";
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

    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    const header =  isNewRole ? langTexts.creatingNewRole : langTexts.editingRole  + roleData?.name;
    setHeader(header)

    return (
        <>
            <h3>{header}</h3> :
            <Button type="submit" form={formId} label={langTexts.saveRole} icon="pi pi-check"/>
            {' '}
            <Button type="button" label={langTexts.deleteRole} severity="danger" onClick={handleDelete}/>
            <br/>
            <br/>
            <RoleDetailPageMain/>
        </>
    );
}