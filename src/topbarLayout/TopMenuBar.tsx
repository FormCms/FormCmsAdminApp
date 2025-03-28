import {Menubar} from "primereact/menubar";
import React from "react";
import {MenuItem} from "primereact/menuitem";

import {configs} from "../config";
import {Logo} from "../layout/Logo";
import {MenuEnd} from "../layout/MenuEnd";
import {GlobalStateKeys, useGlobalState} from "../globalState";
import {cnAssetMenuLabel, cnSystemMenuLabels} from "../types/menu";
import {useAssetMenuItems, useEntityMenuItems, useSystemMenuItems} from "../../libs/FormCmsAdminSdk/useMenuItems";

export function TopMenuBar() {
    const [lan] = useGlobalState<string>( GlobalStateKeys.Language, 'en');
    const entityMenuItems: MenuItem[] = useEntityMenuItems(configs.entityRouterPrefix);

    const assetMenuItems: MenuItem[] = useAssetMenuItems(configs.entityRouterPrefix, lan==='en' ? undefined: cnAssetMenuLabel);

    const systemMenuItems: MenuItem[] = useSystemMenuItems(
        configs.entityRouterPrefix,configs.authRouterPrefix,configs.auditLogRouterPrefix,configs.schemaBuilderRouter,
        lan === 'en' ? undefined : cnSystemMenuLabels
    );

    console.log(assetMenuItems);
    return (
        <Menubar model={[...entityMenuItems, ...assetMenuItems, ...systemMenuItems]} start={<Logo/>} end={<MenuEnd/>}/>
    )
}