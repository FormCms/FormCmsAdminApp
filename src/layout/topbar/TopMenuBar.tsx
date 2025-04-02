import {Menubar} from "primereact/menubar";
import React from "react";
import {configs} from "../../config";
import {Logo} from "../Logo";
import {MenuEnd} from "../MenuEnd";
import {useLanguage} from "../../globalState";
import {cnSystemMenuLabels} from "../../types/menu";
import {useAssetMenuItems, useEntityMenuItems, useSystemMenuItems} from "../../../libs/FormCmsAdminSdk";
import {useNavigate} from "react-router-dom";

export function TopMenuBar() {
    const navigate = useNavigate();
    const lan = useLanguage()
    const entityMenuItems :any[]= useEntityMenuItems(configs.entityRouterPrefix);
    const assetMenuItems :any[]= useAssetMenuItems(configs.entityRouterPrefix);
    const systemMenuItems  :any[]= useSystemMenuItems(
        configs.entityRouterPrefix,configs.authRouterPrefix,configs.auditLogRouterPrefix,configs.schemaBuilderRouter,
    );
    if (lan != 'en'){
        systemMenuItems.forEach(x=>{
            x.label = cnSystemMenuLabels[x.key as keyof typeof cnSystemMenuLabels]
        })
        assetMenuItems.forEach(x => {
            x.label = '资料';
        })
    }

    [...entityMenuItems, ...assetMenuItems, ...systemMenuItems].forEach(x => {
        if (x.link) {
            x.command = () => navigate(x.link);
        }
    })

    return (
        <Menubar model={[...entityMenuItems, ...assetMenuItems, ...systemMenuItems]} start={<Logo/>} end={<MenuEnd/>}/>
    )
}