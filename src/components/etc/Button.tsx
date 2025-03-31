import {Button as PrimeReactButton} from "primereact/button";
import {ButtonProps} from "../../../libs/FormCmsAdminSdk";

export function Button(
    {
        label,icon,type,form,onClick,severity,outlined,size
    }: ButtonProps
) {
    return <PrimeReactButton size={size} outlined={outlined} severity={severity} label={label} icon={icon} type={type} form={form} onClick={onClick} />
}