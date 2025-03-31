import React from "react";
import {InputText} from "primereact/inputtext";
import {InputPanel} from "./InputPanel";
import {TextInputProps} from "../../../libs/FormCmsAdminSdk";


export function TextInput( props: TextInputProps) {
    return <InputPanel  {...props} childComponent={(field: any) =>
        <InputText
            id={field.name}
            value={field.value ?? ''}
            className={' w-full'}
            onChange={(e) => {
                field.onChange(e.target.value)
            }}/>
    }/>
}