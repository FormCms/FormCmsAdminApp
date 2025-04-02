import {SelectButton, SelectButtonChangeEvent} from "primereact/selectbutton";
import {GlobalStateKeys, useGlobalState, useLanguage} from "../../globalState";
import {
    AssetListPageConfig,
    useAssetListPage
} from "../../../libs/FormCmsAdminSdk";
import {XEntity} from "../../../libs/FormCmsAdminSdk";
import {getDefaultComponentConfig} from "../../getDefaultComponentConfig";
import {cnComponentConfig} from "../../types/cnComponentConfig";

const cnPageConfig: AssetListPageConfig = {
    deleteConfirm(label: string | undefined): string {
        return `您确认删除 ${label} 吗？`;
    },
    deleteConfirmHeader: "确认",
    deleteSuccess(_: string | undefined): string {
        return "删除成功";
    }, displayModeLabels: {gallery: "缩略图", list: "列表"}
}

const languageConfig = {
    en: {
        header: 'Asset List',
    },
    cn: {
        header: '资料列表',
    }
}

export function AssetListPage({schema, baseRouter}: { schema: XEntity, baseRouter: string }) {
    const lan = useLanguage();

    const {displayMode, displayModeOptions, setDisplayMode, AssetListPageMain} =
        useAssetListPage(
            lan === 'en' ? getDefaultComponentConfig() : cnComponentConfig,
            baseRouter,
            schema,
            lan === 'en' ? undefined : cnPageConfig
        );

    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    setHeader(languageConfig[lan].header);

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