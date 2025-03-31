import {ConfirmDialogProps} from "../../../libs/FormCmsAdminSdk";
import {confirmDialog, ConfirmDialog as PrimeReactConfirmDialog} from "primereact/confirmdialog";

export function confirm(message:string, header: string, tagKey:string, accept:any){
    return confirmDialog({message,header,tagKey,accept});
}

export function ConfirmDialog({acceptLabel,rejectLabel,tagKey}: ConfirmDialogProps) {
    return <PrimeReactConfirmDialog tagKey={tagKey} acceptLabel={acceptLabel} rejectLabel={rejectLabel}/>
}