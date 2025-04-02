import { Button } from "primereact/button";
import {GlobalStateKeys, useGlobalState, useLanguage} from "../../globalState";
import { NewDataItemPageConfig, userNewDataItemPage, XEntity } from "../../../libs/FormCmsAdminSdk";
import { getDefaultComponentConfig } from "../../getDefaultComponentConfig";
import { cnComponentConfig } from "../../types/cnComponentConfig";

// Centralized language configuration
const languageConfig = {
    en: {
        save: "Save",
        back: "Back"
    },
    cn: {
        save: "保存",
        back: "返回"
    }
};

// Chinese-specific page configuration
const cnPageConfig: NewDataItemPageConfig = {
    saveSuccess: (label: string | undefined) => `保存 ${label} 成功`
};

export function NewDataItemPage({ schema, baseRouter }: { schema: XEntity; baseRouter: string }) {
    const lan = useLanguage();
    const langTexts = languageConfig[lan === 'en' ? 'en' : 'cn'];

    const { handleGoBack, formId, NewDataItemPageMain } = userNewDataItemPage(
        lan === 'en' ? getDefaultComponentConfig() : cnComponentConfig,
        schema,
        baseRouter,
        lan === 'en' ? undefined : cnPageConfig
    );
    const [_, setHeader] = useGlobalState<string>( GlobalStateKeys.Header, '');
    setHeader(schema.displayName);
    return (
        <>
            <br />
            <Button
                label={`${langTexts.save} ${schema.displayName}`}
                type="submit"
                form={formId}
                icon="pi pi-check"
            />
            {' '}
            <Button
                type="button"
                label={langTexts.back}
                onClick={handleGoBack}
            />
            <br />
            <br />
            <NewDataItemPageMain />
        </>
    );
}