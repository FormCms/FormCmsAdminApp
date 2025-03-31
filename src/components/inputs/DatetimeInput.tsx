import React from "react";
import {Calendar} from "primereact/calendar";
import {InputPanel} from "./InputPanel";
import {DatetimeInputProps} from "../../../libs/FormCmsAdminSdk";


export function DatetimeInput( props: DatetimeInputProps) {
    return <InputPanel  {...props} childComponent={(field: any) => {
        const d = field.value && typeof(field.value) === "string" 
            ? props.parseDate(field.value)
            : field.value;
        
        return <Calendar
            inline={props.inline}
            id={field.name}
            showTime ={props.showTime}
            hourFormat="24"
            value={d}
            className={'w-full'}
            readOnlyInput={false}
            onChange={
                e => {
                    field.onChange(props.formatDate(e.value));
                }
            }/>
    }}/>
}