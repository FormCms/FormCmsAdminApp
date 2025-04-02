import {Button} from "primereact/button";
import {useRoleListPage} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {GlobalStateKeys, useGlobalState, useLanguage, useLayout} from "../../globalState";
import {cnComponentConfig} from "../../types/cnComponentConfig";

const langConfig = {
    en:{
        createNewRole :'Create new role',
        header:'Role List',
    },
    cn:{
        createNewRole :'创建新角色',
        header:'角色列表',
    }
}
export function RoleListPage({baseRouter}: { baseRouter: string }) {
    const lan = useLanguage();
    const lanText = langConfig[lan];
    const layout = useLayout()
    const {handleNavigateToNewRolePage, RoleListPageMain} = useRoleListPage(
        lan == 'en' ? getDefaultComponentConfig():cnComponentConfig,
        baseRouter
    );

    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    setHeader(lanText.header)

    return <>
        {layout === 'topBar' && <h2>Role list</h2>}
        <Button onClick={handleNavigateToNewRolePage}>{lanText.createNewRole}</Button>
        <RoleListPageMain/>
    </>
}