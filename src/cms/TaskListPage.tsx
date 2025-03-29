import {Button} from "primereact/button";
import {useLanguage, useLayout} from "../globalState";
import {useTaskListPage, XEntity} from "../../libs/FormCmsAdminSdk";

export function TaskListPage({schema}:{schema:XEntity,baseRouter:string}){
    const layout = useLayout();
    const lan = useLanguage();

    const {handleAddExportTask, handleAddImportTask, handleImportDemoData, TaskListMain, CheckErrorStatus}
        = useTaskListPage({schema});
    return <>
        {layout !== 'sidebar'? <h2>{schema?.displayName} {lan==='en'?'list': '列表'}</h2>:<br/>}
        <Button onClick={handleAddExportTask}>{ lan === 'en' ?'Add Export Task':'添加导出任务'}</Button>{' '}
        <Button onClick={handleAddImportTask}>{lan === 'en' ?'Add Import Task':'添加导入任务'}</Button>{' '}
        <Button onClick={handleImportDemoData}>{lan === 'en' ?'Import Demo Data':'导入演示数据'}</Button>
        <CheckErrorStatus/>
        <TaskListMain/>
    </>
}