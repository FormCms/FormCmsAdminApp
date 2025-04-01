import React, {useState} from "react";
import {FileUpload} from "primereact/fileupload";
import {InputText} from "primereact/inputtext";
import {InputPanel} from "./InputPanel";
import {Button} from "primereact/button";
import {FileInputProps} from "../../../libs/FormCmsAdminSdk";
import {Image} from "primereact/image";


export function FileInput(props: FileInputProps) {
    const FileSelectDialog = props.fileSelector;
    const MetadataEditDialog = props.metadataEditor;
    const [showChooseLib, setShowChooseLib] = useState(false)
    const [showEditMetadata, setShowEditMetadata] = useState(false)

    return <InputPanel  {...props} childComponent={(field: any) => {
        const {uploadUrl} = props

        return <>
            <InputText
                id={field.name}
                value={field.value}
                className={' w-full'}
                onChange={(e) => field.onChange(e.target.value)}
            />
            {
                field.value && props.previewImage && <>
                    <br/>
                    <br/>
                    <Image width={'70%'} src={props.getFullAssetsURL(field.value)} alt={''}/>
                </>
            }
            {field.value && props.download && <a href={props.getFullAssetsURL(field.value)}><h4>Download</h4></a>}
            <br/>
            <br/>
            <div style={{padding: '5px'}} className={'grid  gap-1'}>
                <FileUpload
                    withCredentials
                    mode={"basic"}
                    auto
                    url={uploadUrl}
                    onUpload={(e) => {
                        field.onChange(e.xhr.responseText);
                    }}
                    chooseLabel={props.labels.upload}
                    name={'files'}
                />
                {
                    FileSelectDialog && (
                        <Button type='button'
                                style={{maxWidth: '90px'}}
                                icon={'pi pi-database'}
                                label={props.labels.choose}
                                onClick={() => setShowChooseLib(true)}
                                className="p-button " // Match FileUpload styling
                        />
                    )
                }
                {
                    MetadataEditDialog && field.value && (
                        <Button type='button'
                                style={{maxWidth: '90px'}}
                                icon={'pi pi-pencil'}
                                label={props.labels.edit}
                                onClick={() => setShowEditMetadata(true)}
                                className="p-button "
                        />)
                }
                <Button type='button'
                        style={{maxWidth: '90px'}}
                        icon={'pi pi-trash'}
                        label={props.labels.delete}
                        onClick={() => field.onChange("")}
                        className="p-button "
                />
            </div>
            {
                FileSelectDialog &&
                <FileSelectDialog
                    path={field.value}
                    setPath={path => field.onChange(path)}
                    show={showChooseLib}
                    setShow={setShowChooseLib}
                />
            }
            {
                MetadataEditDialog &&
                <MetadataEditDialog
                    path={field.value}
                    show={showEditMetadata}
                    setShow={setShowEditMetadata}
                />
            }
        </>
    }}/>
}