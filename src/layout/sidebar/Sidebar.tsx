import {Menu} from "primereact/menu";
import {MenuItem, MenuItemCommandEvent} from "primereact/menuitem";
import {auditRouterPrefix, authRouterPrefix, configs, entityRouterPrefix} from "../../config";
import {Logo} from "../Logo";
import {useLanguage} from "../../globalState";
import {cnSystemMenuLabels} from "../../types/menu";
import {
    useAssetMenuItems,
    useEntityMenuItems,
    useSystemMenuItems
} from "../../../libs/FormCmsAdminSdk";
import {useNavigate} from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();
    const lan = useLanguage();

    const entityMenuItems: any[] = useEntityMenuItems(entityRouterPrefix);
    const assetMenuItems: any[] = useAssetMenuItems(entityRouterPrefix);
    const systemMenuItems: any[] = useSystemMenuItems(
        entityRouterPrefix,
        authRouterPrefix,
        auditRouterPrefix,
        configs.schemaBuilderRouter
    );

    if (lan !== 'en') {
        systemMenuItems.forEach(x => {
            x.label = cnSystemMenuLabels[x.key as keyof typeof cnSystemMenuLabels];
        });
        assetMenuItems.forEach(x => {
            x.label = '资料';
        })
    }

    [...entityMenuItems, ...assetMenuItems, ...systemMenuItems].forEach(x => {
        if (x.link) {
            x.command = () => {
                navigate(x.link);
            }
        }
    })

    let items: MenuItem[] = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <Logo/> Form CMS
                    </span>
                )
            }
        },
        { separator: true },
        {
            label: lan === 'en' ? 'Dashboard' : "控制面板",
            command() {
                navigate(configs.routerPrefix + "/")
            }
        },
        { separator: true },
        {
            label: lan === 'en' ? 'Entities' : "数据",
            items: entityMenuItems,
        }
    ];

    if (assetMenuItems.length > 0) {
        items.push({separator: true})
        items.push({
            label: lan === 'en' ? 'Assets' : "资料",
            items: assetMenuItems,
        })
    }

    if (systemMenuItems.length > 0) {
        items.push({separator: true})
        items.push({
            label: lan === 'en' ? 'System' : "系统",
            items: systemMenuItems,
        })
    }

    return (
        <div className="card flex justify-content-center">
            <Menu model={items} className="w-full md:w-15rem" style={{fontSize: '1.1rem'}}/>
        </div>
    )
}