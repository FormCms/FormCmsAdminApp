import {Dropdown} from "primereact/dropdown";
import {InputPanel} from "./InputPanel";
import React from "react";
import {DropDownInputProps} from "../../../libs/FormCmsAdminSdk";



export function DropDownInput(props: DropDownInputProps) {
    return <InputPanel  {...props} childComponent={(field: any) =>
        <Dropdown
            id={field.name}
            value={field.value}
            options={props.options}
            focusInputRef={field.ref}
            onChange={(e) => field.onChange(e.value)}
            className={'w-full'}
        />
    }/>
}