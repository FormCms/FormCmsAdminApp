import {Message as PrimeReactMessage} from 'primereact/message'
import {MessageProps} from "../../../libs/FormCmsAdminSdk";

export function Message(
    {
        text, severity
    }: MessageProps
) {
    return <PrimeReactMessage text={text} severity={severity}/>
}