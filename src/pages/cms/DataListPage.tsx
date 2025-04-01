import {Button} from "primereact/button";
import {useLanguage, useLayout} from "../../globalState";
import {useDataListPage, XEntity} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";

export function DataListPage({schema, baseRouter}: {schema:XEntity,baseRouter:string}) {
    const {createNewItem, DataListPageMain} = useDataListPage(getDefaultComponentConfig(),schema, baseRouter);
    const layout = useLayout();
    const lan = useLanguage();

    return <>
        {layout != 'sidebar' ? <h3>{schema.displayName} list</h3>:<br/>}
        <Button onClick={createNewItem}>{lan === 'en' ? 'Create New' : '新建'} {schema.displayName}</Button>
        <DataListPageMain/>
    </>
}