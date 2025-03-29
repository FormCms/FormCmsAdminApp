import {Button} from "primereact/button";
import {useLanguage} from "../globalState";
import {userNewDataItemPage, XEntity} from "../../libs/FormCmsAdminSdk";

export function NewDataItemPage({schema,baseRouter}: {schema:XEntity,baseRouter:string}) {
    const {handleGoBack, formId,NewDataItemPageMain} = userNewDataItemPage(schema, baseRouter);
    const lan = useLanguage();
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