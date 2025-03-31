import {SelectButtonProps} from "../../../libs/FormCmsAdminSdk";
import {SelectButton as PrimeReactSelectButton} from "primereact/selectbutton";

export function SelectButton(props: SelectButtonProps) {
    return <PrimeReactSelectButton {...props} onChange={(e)=>props.onChange(e.value)} />;
}