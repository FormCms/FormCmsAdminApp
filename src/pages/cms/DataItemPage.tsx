import {ButtonGroup} from "primereact/buttongroup";
import {Button} from "primereact/button";
import {useLanguage} from "../../globalState";
import {cnCmsConfig} from "../../types/cnCmsConfig";

import {XEntity, CmsComponentConfig, useDataItemPage, DataItemPageConfig} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";
const cnPageConfig: DataItemPageConfig = {
    cancelButtonText: "",
    deleteConfirm(s: string): string {
        return `您确认删除[${s}]吗？`;
    },
    deleteConfirmHeader: "确认",
    deleteSuccess: "删除成功",
    publishAtHeader: "发布时间",
    publishDialogHeader: "发布",
    publishSuccess: "发布成功",
    saveSuccess: "保存成功",
    scheduleDialogHeader: "预约",
    scheduleSuccess: "预约成功",
    submitButtonText: "提交",
    unPublishSuccess: "成功取消发布"

}
export function DataItemPage(
    {
        schema,
        baseRouter
    }: {schema:XEntity,baseRouter:string}
) {
    const lan = useLanguage();
    const componentConfig:CmsComponentConfig = lan === 'en' ? getDefaultComponentConfig():cnCmsConfig;

    const {
        formId, showUnpublish, previewUrl,
        deleteProps:{handleDelete, ConfirmDelete, CheckDeleteStatus},
        handleGoBack,
        publishProps:{handleShowPublish, PublishDialog},
        scheduleProps:{handleShowSchedule, ScheduleDialog},
        unpublishProps:{onUnpublish, CheckUnpublishStatus},
        DataItemPageMain,
    } = useDataItemPage(componentConfig,schema, baseRouter,lan === 'en'? undefined:cnPageConfig);
    return <>
        <br/>
        <ButtonGroup>
            <Button type={'submit'} label={`${lan === 'en'?'Save':'保存'} ${schema.displayName}`} icon="pi pi-check" form={formId}/>
            <Button type={'button'} label={`${lan === 'en'?'Save':'删除'} ${schema.displayName}`} icon="pi pi-trash" severity="danger"
                    onClick={handleDelete}/>
            <Button type={'button'} label={lan === 'en'?"Back":'返回'} icon="pi pi-chevron-left" onClick={handleGoBack}/>
        </ButtonGroup>
        &nbsp;
        <ButtonGroup>
            <Button type={'button'} label={lan == 'en' ?"Publish / Update Publish Time":'发布 / 更新发布时间'} icon="pi pi-cloud"
                    onClick={handleShowPublish}/>
            <Button type={'button'} label={lan == 'en'?"Schedule / Reschedule" :'预约发布 / 更新预约发布时间'} icon="pi pi-calendar" onClick={handleShowSchedule}/>
            {showUnpublish && <Button type={'button'} label={lan == 'en'? "Unpublish": '取消发布'} icon="pi pi-ban" onClick={onUnpublish}/>}
        </ButtonGroup>
        &nbsp;
        {previewUrl && <Button type={'button'} label={lan === 'en' ?"Preview":'预览'} onClick={() => window.location.href = previewUrl}/>}
        <br/>
        <br/>
        <CheckDeleteStatus/>
        <CheckUnpublishStatus/>
        <DataItemPageMain/>
        <ConfirmDelete/>
        <PublishDialog/>
        <ScheduleDialog/>
    </>
}