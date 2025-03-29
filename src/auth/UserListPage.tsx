import {GlobalStateKeys, useGlobalState} from "../globalState";
import {useUserListPage} from "../../libs/FormCmsAdminSdk/";

export function UserListPage() {
    const [layout, _] = useGlobalState<string>( GlobalStateKeys.Layout, 'sidebar');
    const {UserListPageMain} = useUserListPage()
    return <>
        {layout !=='sidebar' && <h2>User list</h2>}
        <UserListPageMain/>
    </>
}