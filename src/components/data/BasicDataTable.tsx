import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {BasicDataTableProps} from "../../../libs/FormCmsAdminSdk";

export function BasicDataTable(
    {
        data, tableColumns, actionBodyTemplate, pageSize, dataKey
    }: BasicDataTableProps
) {

    return <div className={'card'}>
        <DataTable value={data} rows={pageSize} paginator dataKey={dataKey}>
            {
                tableColumns.map(x => <Column header={x.header} field={x.field} body={x.body}/>)
            }
            {
                actionBodyTemplate && <Column body={actionBodyTemplate} style={{minWidth: '12rem'}}></Column>
            }
        </DataTable>
    </div>;
}