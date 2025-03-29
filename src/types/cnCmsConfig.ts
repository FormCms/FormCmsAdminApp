import {CmsComponentConfig, getDefaultCmsComponentConfig} from "../../libs/FormCmsAdminSdk";

export const cnCmsConfig: CmsComponentConfig = {
    ...getDefaultCmsComponentConfig(),
    assetLabels: {
        path: '路径',
        url: '链接',
        name: '名称',
        title: '标题',
        size: '大小',
        type: '类型',
        metadata: '元数据',
        createdBy: '创建者',
        createdAt: '创建时间',
        updatedAt: '更新时间',
        linkCount: '引用数量',
        links:'引用',
        id: '编号'
    },
    assetEditor: {
        dialogHeader: "选择资料",
        fileNameLabel: "文件名",
        fileSizeLabel: "大小",
        fileTypeLabel: "类型",
        saveButtonLabel: "保存",
        saveSuccessMessage: "保存成功"
    },
    assetSelector: {

        dialogHeader: "编辑资料",
        galleryLabel: "预览",
        listLabel: "列表",
        okButtonLabel: "确定"
    },
    editTable: {
        addButtonLabel: function (p1: string) {
            return `添加 ${p1}`;
        }, cancelButtonLabel: "取消", dialogHeader: function (_: string) {
            return "取消";
        }, saveButtonLabel: "保存", submitSuccess: function (p1: string) {
            return `保存 ${p1}`;
        }
    },
    fileInputLabels: {choose: "选择", delete: "删除", edit: "编辑", upload: "上传"},

    picklist: {
        cancelButtonLabel: "取消",
        deleteButtonLabel: "删除",
        deleteConfirmationHeader: "确认",
        deleteConfirmationMessage: "确认删除",
        deleteSuccessMessage: "删除成功",
        dialogHeader: function (p1: string) {
            return "选择" + p1;
        },
        saveButtonLabel: "保存",
        saveSuccessMessage: "保存成功",
        selectButtonLabel: function (p1: string) {
            return "选择" + p1;
        }
    }
}