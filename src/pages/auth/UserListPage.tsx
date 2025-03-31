import {GlobalStateKeys, useGlobalState} from "../../globalState";
import {useUserListPage} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";

export function UserListPage() {
    const [layout, _] = useGlobalState<string>( GlobalStateKeys.Layout, 'sidebar');
    const {UserListPageMain} = useUserListPage(getDefaultComponentConfig())
    return <>
        {layout !=='sidebar' && <h2>User list</h2>}
        <UserListPageMain/>
    </>
}