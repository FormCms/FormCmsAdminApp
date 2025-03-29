import {SelectButton} from "primereact/selectbutton";
import {GlobalStateKeys, useGlobalState} from "../globalState";

export function LanguageSelectButton() {
    const [value, setValue] = useGlobalState<string>( GlobalStateKeys.Language, 'en');
    const LanguageOptions  = [
        { label: 'English', value: 'en' },
        { label: '中文', value: 'cn' },
    ]

    return <SelectButton
       value={value}
       onChange={(e) => setValue(e.value)}
       options={LanguageOptions}
    />
}