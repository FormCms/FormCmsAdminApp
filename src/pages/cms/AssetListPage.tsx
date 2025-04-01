import {SelectButton, SelectButtonChangeEvent} from "primereact/selectbutton";
import {useLanguage} from "../../globalState";
import {
    AssetListPageConfig,
    useAssetListPage
} from "../../../libs/FormCmsAdminSdk";
import {XEntity} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../types/comoponentConfig";
import {cnCmsConfig} from "../../types/cnCmsConfig";

const cnPageConfig: AssetListPageConfig = {
    deleteConfirm(label: string | undefined): string {
        return `您确认删除 ${label} 吗？`;
    },
    deleteConfirmHeader: "确认",
    deleteSuccess(_: string | undefined): string {
        return "删除成功";
    }, displayModeLabels: {gallery: "缩略图", list: "列表"}
}

export function AssetListPage({schema, baseRouter}: { schema: XEntity, baseRouter: string }) {
    const lan = useLanguage();
    const {displayMode, displayModeOptions, setDisplayMode, AssetListPageMain} =
        useAssetListPage(
            lan === 'en' ? getDefaultComponentConfig() : cnCmsConfig,
            baseRouter,
            schema,
            lan === 'en' ? undefined : cnPageConfig
        );

    return <>
        <br/>
        <div className="flex gap-5 justify-between">
            <SelectButton
                value={displayMode}
                onChange={(e: SelectButtonChangeEvent) => setDisplayMode(e.value)}
                options={displayModeOptions}
            />
        </div>
        <AssetListPageMain/>
    </>
}