import {Button} from "primereact/button";
import {GlobalStateKeys, useGlobalState} from "../globalState";
import {useDataListPage} from "../../libs/FormCmsAdminSdk/cms/pages/useDataListPage";
import {XEntity} from "../../libs/FormCmsAdminSdk/cms/types/xEntity";

export function DataListPage({schema, baseRouter}: {schema:XEntity,baseRouter:string}) {
    const {createNewItem, DataListPageMain} = useDataListPage(schema, baseRouter);
    const [layout] = useGlobalState<string>(GlobalStateKeys.Layout, 'sidebar');
    const [lan] = useGlobalState<string>(GlobalStateKeys.Language, 'en');

    return <>
        {layout !== "sidebar" ? <h3>{schema.displayName} list</h3>:<br/>}
        <Button onClick={createNewItem}>{lan === 'en' ? 'Create New' : '新建'} {schema.displayName}</Button>
        <DataListPageMain/>
    </>
}