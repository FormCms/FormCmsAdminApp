import { ButtonGroup } from "primereact/buttongroup";
import { Button } from "primereact/button";
import { useLanguage } from "../../globalState";
import { cnComponentConfig } from "../../types/cnComponentConfig";
import { XEntity, useDataItemPage, DataItemPageConfig, ComponentConfig } from "../../../libs/FormCmsAdminSdk";
import { getDefaultComponentConfig } from "../../getDefaultComponentConfig";

// Centralized language configuration
const languageConfig = {
    en: {
        save: "Save",
        delete: "Delete",
        back: "Back",
        publishUpdate: "Publish / Update Publish Time",
        scheduleReschedule: "Schedule / Reschedule",
        unpublish: "Unpublish",
        preview: "Preview"
    },
    cn: {
        save: "保存",
        delete: "删除",
        back: "返回",
        publishUpdate: "发布 / 更新发布时间",
        scheduleReschedule: "预约发布 / 更新预约发布时间",
        unpublish: "取消发布",
        preview: "预览"
    }
};

// Chinese-specific page configuration
const cnPageConfig: DataItemPageConfig = {
    cancelButtonText: "",
    deleteConfirm: (s: string) => `您确认删除[${s}]吗？`,
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
};

export function DataItemPage({ schema, baseRouter }: { schema: XEntity; baseRouter: string }) {
    const lan = useLanguage();
    const componentConfig: ComponentConfig = lan === 'en' ? getDefaultComponentConfig() : cnComponentConfig;
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];

    const {
        formId,
        showUnpublish,
        previewUrl,
        deleteProps: { handleDelete, ConfirmDelete, CheckDeleteStatus },
        handleGoBack,
        publishProps: { handleShowPublish, PublishDialog },
        scheduleProps: { handleShowSchedule, ScheduleDialog },
        unpublishProps: { onUnpublish, CheckUnpublishStatus },
        DataItemPageMain,
    } = useDataItemPage(componentConfig, schema, baseRouter, lan === 'en' ? undefined : cnPageConfig);

    return (
        <>
            <br />
            <ButtonGroup>
                <Button
                    type="submit"
                    label={`${langTexts.save} ${schema.displayName}`}
                    icon="pi pi-check"
                    form={formId}
                />
                <Button
                    type="button"
                    label={`${langTexts.delete} ${schema.displayName}`}
                    icon="pi pi-trash"
                    severity="danger"
                    onClick={handleDelete}
                />
                <Button
                    type="button"
                    label={langTexts.back}
                    icon="pi pi-chevron-left"
                    onClick={handleGoBack}
                />
            </ButtonGroup>

            <ButtonGroup>
                <Button
                    type="button"
                    label={langTexts.publishUpdate}
                    icon="pi pi-cloud"
                    onClick={handleShowPublish}
                />
                <Button
                    type="button"
                    label={langTexts.scheduleReschedule}
                    icon="pi pi-calendar"
                    onClick={handleShowSchedule}
                />
                {showUnpublish && (
                    <Button
                        type="button"
                        label={langTexts.unpublish}
                        icon="pi pi-ban"
                        onClick={onUnpublish}
                    />
                )}
            </ButtonGroup>

            {previewUrl && (
                <Button
                    type="button"
                    label={langTexts.preview}
                    onClick={() => window.location.href = previewUrl}
                />
            )}
            <br />
            <br />
            <CheckDeleteStatus />
            <CheckUnpublishStatus />
            <DataItemPageMain />
            <ConfirmDelete />
            <PublishDialog />
            <ScheduleDialog />
        </>
    );
}