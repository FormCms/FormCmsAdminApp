import React, {useRef} from 'react';
import {Avatar} from 'primereact/avatar';
import {Menu} from 'primereact/menu';
import {profileRouterPrefix} from "../config";
import {useLanguage} from "../globalState";
import {useUserInfo, useUserProfileMenu} from "../../libs/FormCmsAdminSdk";
import {useNavigate} from "react-router-dom";

const UserAvatarDropdown = () => {
    const lan = useLanguage()
    const menu = useRef<any>(null);
    const {data: userAccessInfo} = useUserInfo();
    const menus = useUserProfileMenu(profileRouterPrefix);
    if (lan === 'cn') {
        menus.forEach((item) => {
            if (item.key === 'logout') {
                item.label = "登出"
            } else if (item.key === 'changePassword') {
                item.label = "修改密码"
            }
        })
    }

    const navigate = useNavigate();
    const menuItems = menus.map((item) => {
        return {
            ...item,
            command: item.command ? item.command : () => navigate(item.link),
        };
    })

    function handleToggle(event: any) {
        menu?.current?.toggle(event);
    }

    return (
        <div className="flex align-items-center gap-2">
            <Avatar onClick={handleToggle} icon="pi pi-user" size="normal" image={userAccessInfo?.avatarUrl}
                    style={{backgroundColor: '#2196F3', color: '#ffffff'}} shape="circle"/>
            <Menu model={menuItems} popup ref={menu}/>
            <span onClick={handleToggle} style={{cursor: 'pointer'}}>{userAccessInfo?.email.split('@')[0]}</span>
        </div>
    );
};

export default UserAvatarDropdown;