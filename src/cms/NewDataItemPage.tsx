import {Button} from "primereact/button";
import {GlobalStateKeys, useGlobalState} from "../globalState";
import {userNewDataItemPage} from "../../libs/FormCmsAdminSdk/cms/pages/userNewDataItemPage";
import {XEntity} from "../../libs/FormCmsAdminSdk/cms/types/xEntity";

export function NewDataItemPage({schema,baseRouter}: {schema:XEntity,baseRouter:string}) {
    const {handleGoBack, formId,NewDataItemPageMain} = userNewDataItemPage(schema, baseRouter);
    const [lan] = useGlobalState<string>(GlobalStateKeys.Language, 'en');
    return (
        <>
            <br/>
            <Button label={lan === 'en' ? 'Save ' : '保存 ' + schema.displayName} type="submit" form={formId}
                    icon="pi pi-check"/>
            {' '}
            <Button type={'button'} label={lan === 'en' ? "Back" : '返回'} onClick={handleGoBack}/>
            <br/>
            <br/>
            <NewDataItemPageMain/>
        </>
    )
}