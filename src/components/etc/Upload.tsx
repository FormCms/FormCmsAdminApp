import {FileUpload} from "primereact/fileupload";
import {UploadProps} from "../../../libs/FormCmsAdminSdk";


export function Upload(
    {url, onUpload}:UploadProps
){
    return <FileUpload
        withCredentials
        mode={"basic"}
        auto
        url={url}
        name={'files'}
        onUpload={onUpload}
    />
}