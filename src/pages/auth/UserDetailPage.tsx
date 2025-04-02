import {Button} from "primereact/button";
import {UserDetailPageConfig, useUserDetailPage} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {GlobalStateKeys, useGlobalState, useLanguage} from "../../globalState";
import {cnComponentConfig} from "../../types/cnComponentConfig";

const languageConfig = {
    en: {
        editing: "Editing",
        saveUser: "Save User",
        deleteUser: "Delete User"
    },
    cn: {
        editing: "编辑",
        saveUser: "保存用户",
        deleteUser: "删除用户"
    }
};

const cnPageConfig: UserDetailPageConfig = {
    deleteConfirmHeader: "确认",
    deleteConfirmationMessage: "您确认删除此用户吗？",
    deleteSuccessMessage: "删除成功",
    rolesHeader: "角色"
};

export function UserDetailPage({baseRouter}: { baseRouter: string }) {
    const lan = useLanguage();
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const {formId, userData, handleDelete, UserDetailPageMain} = useUserDetailPage(
        lan === 'en' ? getDefaultComponentConfig() : cnComponentConfig,
        baseRouter,
        lan === 'en' ? undefined : cnPageConfig,
    );

    const header = `${langTexts.editing} ${userData?.email}`
    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    setHeader(header);

    return (
        <>
            <h2>{header}</h2>
            <Button type="submit" label={langTexts.saveUser} icon="pi pi-check" form={formId}/>
            {' '}
            <Button type="button" label={langTexts.deleteUser} severity="danger" onClick={handleDelete}/>
            <UserDetailPageMain/>
        </>
    );
}