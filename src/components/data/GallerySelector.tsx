import {DataView} from 'primereact/dataview';
import {GallerySelectorProps} from "../../../libs/FormCmsAdminSdk";


export function GallerySelector(
    {
        state,
        onPage,
        data,

        getAssetUrl,
        pathField,
        nameField,
        titleField,
        typeField,

        paths,
        setPaths,
    }: GallerySelectorProps
) {
    const gridItem = (asset: any) => {
        const defaultImage = 'https://placehold.co/600x400?text=' + asset[nameField];
        const src = asset[typeField].startsWith('image') ? getAssetUrl(asset[pathField]): defaultImage;
        
        // Handle multiple selection
        const isChecked = paths?.includes(asset[pathField]) || false;

        const toggleMultiSelect =  () => {
            if (isChecked) {
                setPaths((paths || []).filter(p => p !== asset[pathField]));
            } else {
                setPaths([...(paths || []), asset[pathField]]);
            }
        } 

        // Visual indication for selected items
        const selectedClass = isChecked ? 'surface-hover' : '';
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-3 p-2" key={asset[pathField]}>
                <div
                    className={`p-4 border-1 surface-border surface-card border-round ${selectedClass}`}
                    onClick={toggleMultiSelect}
                    style={{cursor: 'pointer'}}
                >
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <div className="flex align-items-center gap-2">
                            <input type="checkbox" checked={isChecked} onChange={toggleMultiSelect} />
                        </div>
                        <img className="w-9 shadow-2 border-round" src={src} alt={''}/>
                        <div className="text-1xl">{asset[nameField]}</div>
                        <div className="text-1xl">{asset[titleField]}</div>
                    </div>
                </div>
            </div>
        );
    };

    return <div className="card">
        <DataView value={data.items}
                  rows={state.rows}
                  first={state.first}
                  totalRecords={data.totalRecords}
                  itemTemplate={gridItem}
                  onPage={onPage}
                  lazy
                  paginator/>
    </div>
}
