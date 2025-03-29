import {GlobalStateKeys, useGlobalState, useLanguage} from "../globalState";
import {SelectButton} from "primereact/selectbutton";
import {CnLayoutOptions, EnLayoutOptions} from "../types/layout";

export function LayoutSelectButton() {
    const [value, setValue] = useGlobalState<string>( GlobalStateKeys.Layout, 'sidebar');
    const lan = useLanguage();

    return <SelectButton
        value={value}
        onChange={(e) => setValue(e.value)}
        options={lan == 'en' ? EnLayoutOptions:CnLayoutOptions}
    />
}