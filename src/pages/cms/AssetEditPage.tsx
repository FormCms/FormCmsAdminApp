import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import {GlobalStateKeys, useGlobalState, useLanguage} from "../../globalState";
import { AssetEditPageConfig, useAssetEditPage, XEntity } from "../../../libs/FormCmsAdminSdk";
import { getDefaultComponentConfig } from "../../getDefaultComponentConfig";
import { cnComponentConfig } from "../../types/cnComponentConfig";

// Centralized language configuration
const languageConfig = {
    en: {
        edit: "Edit ",
        fileName: "File Name",
        type: "Type",
        size: "Size",
        download: "Download",
        replaceFile: "Replace file",
        saveMetadata: "Save Metadata",
        delete: "Delete"
    },
    cn: {
        edit: "编辑",
        fileName: "名称",
        type: "类型",
        size: "大小",
        download: "下载",
        replaceFile: "替换文件",
        saveMetadata: "保存元数据",
        delete: "删除"
    }
};

// Chinese-specific page configuration
const cnPageConfig: AssetEditPageConfig = {
    deleteConfirm: (label: string | undefined) => `您确认删除吗 [${label}]？`,
    deleteConfirmHeader: "确认删除",
    deleteSuccess: (label: string | undefined) => `删除[${label}]成功`,
    saveSuccess: (label: string | undefined) => `保存[${label}]成功`,
    usedByLabel: "引用列表"
};

export function AssetEditPage({ schema, baseRouter }: { schema: XEntity; baseRouter: string }) {
    const lan = useLanguage();
    const {
        asset,
        formId,
        replaceAssetUrl,
        handleDownload,
        handleUpload,
        handleDelete,
        FeaturedImage,
        AssetLinkTable,
        MetaDataForm
    } = useAssetEditPage(
        lan === 'en' ? getDefaultComponentConfig() : cnComponentConfig,
        baseRouter,
        schema,
        lan === 'en' ? undefined : cnPageConfig
    );

    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];
    const header = langTexts.edit + " "+ asset.name;
    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    setHeader(header);

    return (
        <>
            <h3>{header}</h3>
            <FeaturedImage />
            <br />
            {asset && (
                <div className="mt-2 flex gap-4">
                    <label className="block font-bold">{langTexts.fileName}</label>
                    <label>{asset.name}</label>

                    <label className="block font-bold">{langTexts.type}</label>
                    <label className="block">{asset.type}</label>

                    <label className="block font-bold">{langTexts.size}</label>
                    <label>{asset.size}</label>
                </div>
            )}
            <br />
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Button
                    label={langTexts.download}
                    icon="pi pi-download"
                    onClick={handleDownload}
                    className="p-button-secondary"
                />
                <FileUpload
                    withCredentials
                    mode="basic"
                    auto
                    url={replaceAssetUrl}
                    onUpload={handleUpload}
                    chooseLabel={langTexts.replaceFile}
                    name="files"
                />
                <Button
                    label={langTexts.saveMetadata}
                    type="submit"
                    form={formId}
                    icon="pi pi-check"
                />
                <Button
                    label={langTexts.delete}
                    type="button"
                    onClick={handleDelete}
                    className="p-button-danger"
                    icon="pi pi-remove"
                />
            </div>
            <br />
            <MetaDataForm />
            <AssetLinkTable />
        </>
    );
}