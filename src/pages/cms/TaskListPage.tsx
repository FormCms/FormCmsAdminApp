import {Button} from "primereact/button";
import {useLanguage, useLayout} from "../../globalState";
import {
    TaskListPageConfig,
    useTaskListPage,
    XEntity
} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";

const cnPageConfig : TaskListPageConfig = {
    archiveSuccess: "归档成功",
    exportSuccess: "导出成功",
    importSuccess: "导入成功",
    uploadImportDialogHeader: "选择文件上传",
    taskLabels: {
        id:'编号',
        taskId:'任务编号',
        taskStatus:'状态',
        type:'类型',
        createdAt:'创建时间',
        createdBy:'创建人',
        progress:'进度',
        error:'错误',
        updatedAt:'更新时间'
    },
}

export function TaskListPage({schema}:{schema:XEntity,baseRouter:string}){
    const layout = useLayout();
    const lan = useLanguage();


    const {handleAddExportTask, handleAddImportTask, handleImportDemoData, TaskListMain, CheckErrorStatus}
        = useTaskListPage(getDefaultComponentConfig(),schema,lan ==='en'?undefined:cnPageConfig);
    return <>
        {layout !== 'sidebar'? <h2>{lan==='en'?'Task list': '任务列表'}</h2>:<br/>}
        <Button onClick={handleAddExportTask}>{ lan === 'en' ?'Add Export Task':'添加导出任务'}</Button>{' '}
        <Button onClick={handleAddImportTask}>{lan === 'en' ?'Add Import Task':'添加导入任务'}</Button>{' '}
        <Button onClick={handleImportDemoData}>{lan === 'en' ?'Import Demo Data':'导入演示数据'}</Button>
        <CheckErrorStatus/>
        <TaskListMain/>
    </>
}