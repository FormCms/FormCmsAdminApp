import {Button} from "primereact/button";
import {FileUpload} from "primereact/fileupload";
import {useLanguage} from "../../globalState";
import {AssetEditPageConfig, useAssetEditPage, XEntity} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";
import {cnCmsConfig} from "../../types/cnCmsConfig";

const cnPageConfig: AssetEditPageConfig = {

    deleteConfirm(label: string | undefined): string {
        return `您确认删除吗 [${label}]？`;
    },
    deleteConfirmHeader: "确认删除",
    deleteSuccess(label: string | undefined): string {
        return `删除[${label}]成功`;
    }, saveSuccess(label: string | undefined): string {
        return `保存[${label}]成功`;
    }, usedByLabel: "引用列表"


}
export function AssetEditPage({schema,baseRouter}:{schema:XEntity,baseRouter:string}) {
    const lan = useLanguage();
    const {
        asset,formId, replaceAssetUrl,
        handleDownload, handleUpload, handleDelete,
        FeaturedImage, AssetLinkTable, MetaDataForm
    } = useAssetEditPage(
        lan === 'en' ?getDefaultComponentConfig() :cnCmsConfig,
        baseRouter,
        schema,
        lan === 'en' ?undefined :cnPageConfig
    );


    return <>
        <h3>{lan==='en'?'Edit ':'编辑'} {asset.name}</h3>
        <FeaturedImage/>
        <br/>
        {
            asset && <div className="mt-2 flex gap-4">
                <label className="block font-bold">{lan =='en'?'File Name':'名称'}</label>
                <label>{asset.name}</label>

                <label className="block font-bold">{lan =='en' ?'Type':'类型'}</label>
                <label className="block">{asset.type}</label>

                <label className="block font-bold">{lan =='en' ?'Size':'大小'}</label>
                <label>{asset.size}</label>

            </div>
        }
        <br/>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <Button
                label={lan ==='en'?"Download":'下载'}
                icon="pi pi-download"
                onClick={handleDownload}
                className="p-button-secondary"
            />
            <FileUpload
                withCredentials
                mode={"basic"}
                auto
                url={replaceAssetUrl}
                onUpload={handleUpload}
                chooseLabel={lan === 'en' ?"Replace file" :'替换文件'}
                name={'files'}
            />
            <Button
                label={lan === 'en' ?'Save Metadata':'保存元数据'}
                type="submit"
                form={formId}
                icon="pi pi-check"/>
            <Button
                label={lan === 'en'?'Delete':'删除'}
                type="button"
                onClick={handleDelete}
                className="p-button-danger"
                icon="pi pi-remove"/>
        </div>
        <br/>
        <MetaDataForm/>
        <AssetLinkTable/>
    </>
}