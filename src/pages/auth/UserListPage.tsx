import {useLanguage, useLayout} from "../../globalState";
import {UserListPageConfig, useUserListPage} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {cnComponentConfig} from "../../types/cnComponentConfig";

const cnPageConfig:UserListPageConfig = {
    emailHeader: "电子邮件",
    roleHeader: "角色"
}


const languageConfig = {
    en: {
        userList: "User List",
    },
    cn: {
        userList: "用户列表",
    }
};
export function UserListPage() {
    const layout = useLayout()
    const lan = useLanguage()

    const {UserListPageMain} = useUserListPage(
        lan === 'en' ?getDefaultComponentConfig():cnComponentConfig,
        lan === 'en' ? undefined :cnPageConfig
    )

    const lang = languageConfig[lan];
    return <>
        {layout !=='sidebar' && <h2>{lang.userList}</h2>}
        <UserListPageMain/>
    </>
}