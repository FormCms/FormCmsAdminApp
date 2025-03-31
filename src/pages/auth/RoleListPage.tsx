import {Button} from "primereact/button";
import {useRoleListPage} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";

export  function RoleListPage({baseRouter}:{baseRouter:string}) {
    const {handleNavigateToNewRolePage,RoleListPageMain} = useRoleListPage(getDefaultComponentConfig(),baseRouter);
    return <>
        <h2>Role list</h2>
        <Button onClick={handleNavigateToNewRolePage}>Create New Role</Button>
        <RoleListPageMain/>
    </>
}