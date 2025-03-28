import {Button} from "primereact/button";
import {GlobalStateKeys, useGlobalState} from "../globalState";
import {useTaskListPage} from "../../libs/FormCmsAdminSdk/cms/pages/useTaskListPage";
import {XEntity} from "../../libs/FormCmsAdminSdk/cms/types/xEntity";

export function TaskListPage({schema}:{schema:XEntity,baseRouter:string}){
    const [layout, _] = useGlobalState<string>( GlobalStateKeys.Layout, 'sidebar');
    const {handleAddExportTask, handleAddImportTask, handleImportDemoData, TaskListMain, CheckErrorStatus} = useTaskListPage({schema});
    return <>
        {layout !== 'sidebar'? <h2>{schema?.displayName} list</h2>:<br/>}
        <Button onClick={handleAddExportTask}>Add Export Task</Button>{' '}
        <Button onClick={handleAddImportTask}>Add Import Task</Button>{' '}
        <Button onClick={handleImportDemoData}>Import Demo Data</Button>
        <CheckErrorStatus/>
        <TaskListMain/>
    </>
}