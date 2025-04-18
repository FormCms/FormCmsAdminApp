import React, {useState} from "react";
import {FileUpload, FileUploadUploadEvent} from "primereact/fileupload";
import {InputText} from "primereact/inputtext";
import {InputPanel} from "./InputPanel";
import {Galleria} from "primereact/galleria";
import {Button} from "primereact/button";
import {GalleryInputProps} from "../../../libs/FormCmsAdminSdk";
import {Message} from "primereact/message";

const responsiveOptions = [
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
];
const itemTemplate = (item: any) => {
    return <img src={item.itemImageSrc} style={{width: '100%'}} alt={''}/>
}

export function GalleryInput(props: GalleryInputProps) {
    const FileSelectDialog = props.fileSelector;
    const MetadataEditor = props.metadataEditor;

    const [showChooseLib, setShowChooseLib] = useState(false)
    const [showMetadataEditor, setShowMetadataEditor] = useState(false)
    const [err, setErr] = useState("")

    return <InputPanel  {...props} childComponent={(field: any) => {
        const [activeIndex, setActiveIndex] = useState(0)
        const paths: string[] = field.value ?? [];
        const setPaths = (newPaths: string[]) => {
            setActiveIndex(0);
            field.onChange(newPaths);
        }
        const urls = paths.map((x: any) => ({
            itemImageSrc: props.getFullAssetsURL(x), thumbnailImageSrc: props.getFullAssetsURL(x)
        }));

        const handleRemoveActive = () => {
            const newPath = paths.filter((_, index) => index !== activeIndex);
            setPaths(newPath);
        }

        const handleUploaded = (e: FileUploadUploadEvent) => {
            setErr('')
            const newPath = [...paths, ...e.xhr.responseText.split(',')];
            setPaths(newPath);
        }

        return <>
            {err &&<><br/><Message severity="error" text={err} /><br/><br/></>}
            <InputText type={'hidden'} id={field.name} value={field.value} className={' w-full'}
                       onChange={(e) => field.onChange(e.target.value)}/>

            <Galleria showIndicators
                      activeIndex={activeIndex}
                      onItemChange={(e) => setActiveIndex(e.index)}
                      responsiveOptions={responsiveOptions}
                      numVisible={5}
                      style={{maxWidth: '70%'}}
                      item={itemTemplate}
                      showThumbnails={false}
                      value={urls}
            />

            <div className={'grid gap-1'}>
                <FileUpload withCredentials
                            auto
                            multiple
                            mode={"basic"}
                            url={props.uploadUrl}
                            onUpload={handleUploaded}
                            onError={
                                (e)=>{
                                    const msg = JSON.parse(e.xhr.responseText);
                                    setErr(msg.title);
                                }
                            }
                            name={'files'}
                            chooseLabel={props.labels.upload}
                />
                {
                    FileSelectDialog && (
                        <Button type='button'
                                icon={'pi pi-database'}
                                label={props.labels.choose}
                                onClick={() => setShowChooseLib(true)}
                                style={{maxWidth: '90px'}}
                                className="p-button " // Match FileUpload styling
                        />)
                }
                {
                    MetadataEditor && paths.length > 0 && (
                        <Button type='button'
                                style={{maxWidth: '90px'}}
                                icon={'pi pi-pencil'}
                                label={props.labels.edit}
                                onClick={() => setShowMetadataEditor(true)}
                                className="p-button " // Match FileUpload styling
                        />
                    )
                }
                <Button type='button'
                        icon={'pi pi-trash'}
                        style={{maxWidth: '90px'}}
                        label={props.labels.delete}
                        onClick={handleRemoveActive}
                        className="p-button " // Match FileUpload styling
                />
            </div>
            {
                FileSelectDialog &&
                <FileSelectDialog
                    setPaths={setPaths}
                    paths={paths}
                    show={showChooseLib}
                    setShow={setShowChooseLib}
                />
            }
            {
                MetadataEditor && (
                    <MetadataEditor
                        show={showMetadataEditor}
                        setShow={setShowMetadataEditor}
                        path={paths[activeIndex]}
                    />
                )
            }
        </>
    }}/>
}