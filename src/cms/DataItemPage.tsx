import {ButtonGroup} from "primereact/buttongroup";
import {Button} from "primereact/button";
import {GlobalStateKeys, useGlobalState} from "../globalState";
import {cnCmsConfig} from "../types/cnCmsConfig";
import {CmsComponentConfig, getDefaultCmsComponentConfig} from "../../libs/FormCmsAdminSdk/cms/cmsComponentConfig";
import {useDataItemPage} from "../../libs/FormCmsAdminSdk/cms/pages/useDataItemPage";
import {XEntity} from "../../libs/FormCmsAdminSdk/cms/types/xEntity";

export function DataItemPage(
    {
        schema,
        baseRouter
    }: {schema:XEntity,baseRouter:string}
) {
    const [lan] = useGlobalState<string>( GlobalStateKeys.Language, 'en');
    const componentConfig:CmsComponentConfig = lan === 'en' ? getDefaultCmsComponentConfig():cnCmsConfig;

    const {
        formId, showUnpublish, previewUrl,
        deleteProps:{handleDelete, ConfirmDelete, CheckDeleteStatus},
        handleGoBack,
        publishProps:{handleShowPublish, PublishDialog},
        scheduleProps:{handleShowSchedule, ScheduleDialog},
        unpublishProps:{onUnpublish, CheckUnpublishStatus},
        DataItemPageMain,
    } = useDataItemPage(schema, baseRouter,undefined, componentConfig);
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
        {previewUrl && <Button type={'button'} label={"Preview"} onClick={() => window.location.href = previewUrl}/>}
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