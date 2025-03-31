import {Image as PrimeImage} from "primereact/image"
import React from "react";
import {ImageProps} from "../../../libs/FormCmsAdminSdk";
export function Image(
    {
        src, width
    }:ImageProps
) {
    return <PrimeImage src={src} preview width={width}/>
}