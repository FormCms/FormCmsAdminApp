import {GlobalStateKeys, useGlobalState, useLanguage, useLayout} from "../../globalState";
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

    const lanText = languageConfig[lan];
    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    setHeader(lanText.userList);

    return <>
        {layout !=='sidebar' && <h3>{lanText.userList}</h3>}
        <UserListPageMain/>
    </>
}