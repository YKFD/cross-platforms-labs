import React from 'react'
import {StatusBar} from "react-native";
//Local dir
import {Navigator} from "./navigator";

export default () => {
    return <><StatusBar barStyle="dark-content" /><Navigator/></>
}