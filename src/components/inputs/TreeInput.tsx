import {Tree, TreeCheckboxSelectionKeys, TreeSelectionEvent} from "primereact/tree";
import {TreeInputProps} from "../../../libs/FormCmsAdminSdk";
import {useEffect, useState} from "react";

/*
convert nodes = [ { key: '1', children: ['1-1', '1-2'] }], selectedKeys = ['1', 1-2'] to
{
    1: {partialCheck:true}
    1-2: {checked:true}
}
* */
function getSelectionKeys(nodes: TreeInputProps['nodes'], selectedKeys: string[]) {
    let ret: TreeCheckboxSelectionKeys = {};
    nodes.forEach(node => {
        wfs(node)
    });

    function wfs(node: TreeInputProps['nodes'][number]) {
        const checked = selectedKeys.includes(node.key);
        if (!checked) return false;

        let partialChecked = false;
        for (const child of node.children ?? []) {
            if (wfs(child)) {
                partialChecked = true;
            }
        }
        ret[node.key] = partialChecked ? {partialChecked} : {checked};
        return true;
    }

    return ret;
}

/*
expend first layer of nodes
* */
function getExpendedKeys(nodes: TreeInputProps['nodes']) {
    const result: { [key: string]: boolean } = {};
    nodes.forEach(n => result[n.key] = true);
    return result;
}

export function TreeInput(
    {
        nodes,
        selectedNodeIds,
        handleSelectionChange,
    }: TreeInputProps
) {

    const [selectionKeys, setSelectionKeys] = useState<any>();
    const [expandedKeys, setExpandedKeys] = useState<{ [key: string]: boolean }>();

    useEffect(() => {
        setExpandedKeys(getExpendedKeys(nodes));
    }, []);
    useEffect(() => {
        const keys = getSelectionKeys(nodes ?? [], selectedNodeIds ?? []);
        setSelectionKeys(keys);

    }, [selectedNodeIds, nodes]);

    function getAdded(testingKeys: TreeCheckboxSelectionKeys, basedKeys: TreeCheckboxSelectionKeys) {
        let ret: any[] = [];
        Object.keys(testingKeys).forEach(testingKey => {
            if (!basedKeys[testingKey]) {
                ret.push(testingKey);
            }
        })
        return ret;
    }

    async function saveSelectedIds(e: TreeSelectionEvent) {
        // @ts-ignore
        const checked = e.originalEvent.checked;
        if (checked) {
            const ids = getAdded(e.value as TreeCheckboxSelectionKeys, selectionKeys);
            handleSelectionChange(true, ids);

        } else {
            const ids = getAdded(selectionKeys, e.value as TreeCheckboxSelectionKeys);
            handleSelectionChange(false, ids);
        }
    }

    return <Tree value={nodes}
                 selectionKeys={selectionKeys}
                 expandedKeys={expandedKeys}
                 selectionMode="checkbox"
                 onToggle={(e) => setExpandedKeys(e.value)}
                 className="w-full "
                 onSelectionChange={saveSelectedIds}
    />;
}