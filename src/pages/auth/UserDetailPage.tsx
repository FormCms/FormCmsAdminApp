import {Button} from "primereact/button";
import {useUserDetailPage} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";

export function UserDetailPage({baseRouter}:{baseRouter:string}) {
    const {formId, userData,handleDelete, UserDetailPageMain} = useUserDetailPage(getDefaultComponentConfig(),baseRouter)
    return   <>
        <h2>Editing {userData?.email}</h2>
        <Button type={'submit'} label={"Save User"} icon="pi pi-check" form={formId}/>
        {' '}
        <Button type={'button'} label={"Delete User"} severity="danger" onClick={handleDelete}/>
        <UserDetailPageMain/>
    </>
}