import {Button} from "primereact/button";
import {useRoleListPage} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {useLanguage, useLayout} from "../../globalState";
import {cnComponentConfig} from "../../types/cnComponentConfig";

const langConfig = {
    en:{
        createNewRole :'Create new role',
    },
    cn:{
      createNewRole :'创建新角色',
    }
}
export function RoleListPage({baseRouter}: { baseRouter: string }) {
    const lan = useLanguage();
    const lang = langConfig[lan];
    const layout = useLayout()
    const {handleNavigateToNewRolePage, RoleListPageMain} = useRoleListPage(
        lan == 'en' ? getDefaultComponentConfig():cnComponentConfig,
        baseRouter
    );
    return <>
        {layout === 'topBar' && <h2>Role list</h2>}
        <Button onClick={handleNavigateToNewRolePage}>{lang.createNewRole}</Button>
        <RoleListPageMain/>
    </>
}