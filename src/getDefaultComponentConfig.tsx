import {LazyDataTable} from "./components/data/LazyDataTable";
import {BasicDataTable} from "./components/data/BasicDataTable";
import {Dialog} from "./components/etc/Dialog";
import {Image} from "./components/etc/Image";
import {Button} from "./components/etc/Button";
import {Icon} from "./components/etc/Icon";
import {Toast} from "./components/etc/Toast";
import {Spinner} from "./components/etc/Spinner";
import {Message} from "./components/etc/Message";
import {Upload} from "./components/etc/Upload";
import {TreeInput} from "./components/inputs/TreeInput";
import {TreeSelectInput} from "./components/inputs/TreeSelectInput";
import {LookupInput} from "./components/inputs/LookupInput";
import {GalleryInput} from "./components/inputs/GalleryInput";
import {MultiSelectInput} from "./components/inputs/MultiSelectInput";
import {FileInput} from "./components/inputs/FileInput";
import {DatetimeInput} from "./components/inputs/DatetimeInput";
import {TextAreaInput} from "./components/inputs/TextAreaInput";
import {DictionaryInput} from "./components/inputs/DictionaryInput";
import {TextInput} from "./components/inputs/TextInput";
import {EditorInput} from "./components/inputs/EditorInput";
import {DropDownInput} from "./components/inputs/DropDownInput";
import {NumberInput} from "./components/inputs/NumberInput";
import {GallerySelector} from "./components/data/GallerySelector";
import {GalleryView} from "./components/data/GalleryView";
import {SelectButton} from "./components/etc/SelectButton";
import {ConfirmDialog, confirm} from "./components/etc/ConfirmDialog";
import {ComponentConfig} from "../libs/FormCmsAdminSdk";

export function getDefaultComponentConfig(): ComponentConfig {
    return {
        entityPermissionLabels : undefined,
        addPairLabel:'Add Pair',
        dataComponents: {
            lazyTable: LazyDataTable,
            basicTable: BasicDataTable,
            gallerySelector:GallerySelector,
            galleryView:GalleryView,
        },
        etc: {
            confirm: confirm,
            confirmDialog: ConfirmDialog,
            selectButton: SelectButton,
            dialog: Dialog,
            image: Image,
            button: Button,
            icon:Icon,
            toast: Toast,
            spinner: Spinner,
            message: Message,
            upload:Upload,
        },
        confirmLabels: {
            accept: 'Yes',
            reject: 'No',
        },
        fileInputLabels: {
            upload: 'Up',
            choose: 'Pick',
            edit: 'Mod',
            delete: 'Del',
        },
        inputComponents: {
            treeInput: TreeInput,
            treeSelect: TreeSelectInput,
            lookup: LookupInput,
            gallery: GalleryInput,
            multiSelect: MultiSelectInput,
            file: FileInput,
            datetime: DatetimeInput,
            textarea: TextAreaInput,
            dictionary: DictionaryInput,
            text: TextInput,
            editor: EditorInput,
            dropdown: DropDownInput,
            number: NumberInput,

        },
        assetEditor: {
            dialogHeader: "Edit Metadata",
            saveSuccessMessage: "Metadata saved",
            saveButtonLabel: "Save",
            fileNameLabel:"File Name:",
            fileTypeLabel:"Type:",
            fileSizeLabel:"Size:",
        },
        assetSelector: {
            dialogHeader: "Select Asset",
            listLabel: "Select Metadata",
            galleryLabel: "Select Metadata",
            okButtonLabel: "Ok",
        },
        assetLabels:null,
        assetLinkLabels:{
            entityName:'Entity Name',
            recordId:'Record Id',
            id:'id',
            assetId:'Asset Id',
            createdAt: 'Created At',
            updatedAt:'Updated At',
        },
        editTable: {
            submitSuccess: (field: string) => `Saved ${field}`,
            dialogHeader: (header: string) => `Edit ${header}`,
            addButtonLabel: (header: string) => `Add ${header}`,
            cancelButtonLabel: "Cancel",
            saveButtonLabel: "Save"
        },
        picklist:{
            deleteButtonLabel: "Delete",
            deleteConfirmationHeader: "Confirm",
            deleteConfirmationMessage: "Do you want to delete these items?",
            deleteSuccessMessage: "Delete Succeed",

            saveSuccessMessage: "Save success",
            cancelButtonLabel: "Cancel",
            saveButtonLabel: "Save",

            dialogHeader:(lbl:string) => `Select ${lbl}`,
            selectButtonLabel:(lbl:string) => `Select ${lbl}`,
        },
    }
}