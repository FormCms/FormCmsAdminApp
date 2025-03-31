import React from "react";
import {InputPanel} from "./InputPanel";
import {InputNumber} from "primereact/inputnumber";
import {NumberInputProps} from "../../../libs/FormCmsAdminSdk";


export function NumberInput( props: NumberInputProps ) {
    return <InputPanel  {...props} childComponent={(field: any) =>
        <><br/>
            <InputNumber
                id={field.name}
                value={field.value ?? 0}
                className={'w-full'}
                onValueChange={(e) => {
                    field.onChange(e.value);
                }}/>
        </>
    }/>
}