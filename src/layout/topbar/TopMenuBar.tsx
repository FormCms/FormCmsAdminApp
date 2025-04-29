import {Menubar} from "primereact/menubar";
import React from "react";
import {auditRouterPrefix, authRouterPrefix, configs, entityRouterPrefix} from "../../config";
import {Logo} from "../Logo";
import {MenuEnd} from "../MenuEnd";
import {useLanguage} from "../../globalState";
import {cnSystemMenuLabels} from "../../types/menu";
import {useAssetMenuItems, useEntityMenuItems, useSystemMenuItems} from "../../../libs/FormCmsAdminSdk";
import {useNavigate} from "react-router-dom";
import {MenuItemCommandEvent} from "primereact/menuitem";

export function TopMenuBar() {
    const navigate = useNavigate();
    const lan = useLanguage()
    const entityMenuItems :any[]= useEntityMenuItems(entityRouterPrefix);
    const assetMenuItems :any[]= useAssetMenuItems(entityRouterPrefix);
    const systemMenuItems  :any[]= useSystemMenuItems(
        entityRouterPrefix,authRouterPrefix,auditRouterPrefix,configs.schemaBuilderRouter,
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

    const dashBoard = {
            label: lan === 'en' ? 'Dashboard' : "控制面板",
            command() {
                navigate(configs.routerPrefix + "/")
            }
        }

    return ( <Menubar model={[dashBoard,...entityMenuItems, ...assetMenuItems, ...systemMenuItems]} start={<Logo/>} end={<MenuEnd/>}/>
    )
}