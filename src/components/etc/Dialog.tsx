import {Dialog as PrimeReactDialog} from "primereact/dialog";
import {DialogProps} from "../../../libs/FormCmsAdminSdk";



export function Dialog(
    {
        header,
        footer,
        visible,
        maximizable = true,
        width = "700px",
        className = "p-fluid",
        onHide,
        children,
    }: DialogProps) {
    return (
        <PrimeReactDialog
            maximizable={maximizable}
            header={header}
            footer={footer}
            visible={visible}
            style={{width}}
            modal={true}
            className={className}
            onHide={onHide}
        >
            {children}
        </PrimeReactDialog>
    );
}