import {Button} from "primereact/button";
import {useRoleDetailPage} from "../../libs/FormCmsAdminSdk/auth/pages/useRoleDetailPage";

export function RoleDetailPage({baseRouter}:{baseRouter:string}) {
    const {isNewRole, roleData, handleDelete, RoleDetailPageMain} = useRoleDetailPage(baseRouter)
    return <>
        { isNewRole&& <h2>Editing Role `{roleData?.name}`</h2>}
        <Button type={'submit'} label={"Save Role"} icon="pi pi-check"/>
        {' '}
        <Button type={'button'} label={"Delete Role"} severity="danger" onClick={handleDelete}/>
        <RoleDetailPageMain/>
    </>
}