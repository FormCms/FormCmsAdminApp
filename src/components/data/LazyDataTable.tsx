import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import React from "react";
import {imageColumn} from "./columns/ImageColumn";
import {fileColumn} from "./columns/FileColumn";
import {textColumn} from "./columns/TextColumn";
import {LazyDataTableProps} from "../../../libs/FormCmsAdminSdk";

export function LazyDataTable(
    {
        dataKey,
        columns,
        data,
        selectedItems,
        setSelectedItems,
        stateManager: {state, handlers: {onPage, onFilter, onSort}},
        selectionMode,
        getFullAssetsURL,
        formater,
        actionTemplate
    }: LazyDataTableProps
) {
    const tableColumns = columns.map(col => {
        switch (col.contentType) {
            case 'image':
                return imageColumn(col.field, col.header, getFullAssetsURL)
            case 'file':
                return fileColumn(col.field, col.header, getFullAssetsURL)
            default:
                return textColumn(col.field, col.header, col.sortable, col.filterable, col.format ? formater[col.format] : undefined, col.dataType, col.onClick)
        }
    });

    if (actionTemplate) {
        tableColumns.push(<Column key="action" body={actionTemplate} exportable={false} style={{minWidth: '12rem'}}/>)
    }
    return columns && data && <div className="card">
        <DataTable
            dataKey={dataKey}
            sortMode="multiple"
            value={data.items}
            paginator
            totalRecords={data.totalRecords}
            rows={state.rows}
            lazy
            first={state?.first}
            filters={state?.filters}
            multiSortMeta={state?.multiSortMeta}
            sortField={state?.sortField}
            sortOrder={state?.sortOrder}
            onSort={onSort}
            onFilter={onFilter}
            onPage={onPage}
            selection={selectedItems}
            onSelectionChange={setSelectedItems ? (e) => setSelectedItems(e.value) : undefined}
        >
            {selectionMode && <Column selectionMode={selectionMode} headerStyle={{width: '3rem'}}></Column>}
            {tableColumns}
        </DataTable>
    </div>
}