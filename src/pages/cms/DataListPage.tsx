import { Button } from "primereact/button";
import { useLanguage, useLayout } from "../../globalState";
import { DataListPageConfig, useDataListPage, XEntity } from "../../../libs/FormCmsAdminSdk";
import { getDefaultComponentConfig } from "../../getDefaultComponentConfig";
import { cnComponentConfig } from "../../types/cnComponentConfig";

// Centralized language configuration with camelCase name
const languageConfig = {
    en: {
        list: "list",
        createNew: "Create New"
    },
    cn: {
        list: "列表",
        createNew: "新建"
    }
};

// Chinese-specific page configuration
const cnPageConfig: DataListPageConfig = {
    confirmHeader: "确认",
    deleteConfirm: (label: string) => `您确认删除【${label}】吗？`,
    deleteSuccess: (label: string) => `删除【${label}】成功`
};

export function DataListPage({ schema, baseRouter }: { schema: XEntity; baseRouter: string }) {
    const layout = useLayout();
    const lan = useLanguage();

    const { createNewItem, DataListPageMain } = useDataListPage(
        lan === 'en' ? getDefaultComponentConfig() : cnComponentConfig,
        schema,
        baseRouter,
        lan === 'en' ? undefined : cnPageConfig
    );

    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];

    return (
        <>
            {layout !== 'sidebar' ? (
                <h3>
                    {schema.displayName} {langTexts.list}
                </h3>
            ) : (
                <br />
            )}
            <Button onClick={createNewItem}>
                {langTexts.createNew} {schema.displayName}
            </Button>
            <DataListPageMain />
        </>
    );
}