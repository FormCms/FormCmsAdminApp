import {Toast as PrimeReactToast} from "primereact/toast";
import {ToastProps} from "../../../libs/FormCmsAdminSdk";


export function Toast(props: ToastProps) {
    return (<PrimeReactToast ref={props.ref}/>)
}