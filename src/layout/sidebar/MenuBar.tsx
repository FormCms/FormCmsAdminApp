import {GlobalStateKeys, useGlobalState} from "../../globalState";
import React from "react";
import {Menubar} from "primereact/menubar";
import {MenuEnd} from "../MenuEnd";

export function MenuBar() {
    const [header, _] = useGlobalState<string>( GlobalStateKeys.Header, '');
    const start = <h3>📋 {header}</h3>
    return  <Menubar start={start} end={<MenuEnd/>}/>
}